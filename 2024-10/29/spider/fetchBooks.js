// 抓取豆瓣的书籍信息
// const axios = require('axios');

const { default: axios } = require("axios");
const cheerio = require('cheerio');
const Book = require('../model/Book')


/** 
 * description: 
 * return {*}
 */
async function getBooksHtml() {
    // axios.baseURL = 'https://book.douban.com';
    const { data } = await axios.get('https://book.douban.com/latest')
    return data
}

/** 
 * description: 从豆瓣中得到一个完整的网页,并从网页中分析出书籍信息,然后得到一个书籍详情页的数组
 * return {*}
 */
async function getBooksLinks() {
    const html = await getBooksHtml()
    // 给一个html 会返回 jquery对象
    const $ = cheerio.load(html)
    const lis = $('#content .grid-16-8 li .media__img a')
    console.log("🐒🐒 ~ file: fetchBooks.js:27 ~ getBooksList ~ lis:", lis)
    const links = lis
        .map((index, item) => {
            // const href = ele.attribs["href"];
            return $(item).attr('href')
        })
        .get();
    return links
}

async function getBookDetail(detailUrl) {
    const resp = await axios.get(detailUrl)
    const $ = cheerio.load(resp.data)
    // 书名
    const name = $("h1").text().trim();
    // 图片地址
    const imgUrl = $("#mainpic > a > img").attr("src");
    const spans = $("#info span.pl");
    // 作者
    const authorSpan = spans.filter((index, ele) => {
        return $(ele).text().includes("作者")
    })
    const author = authorSpan.next('a').text()
    // 出版年
    const publisherSpan = spans.filter((index, ele) => {
        return $(ele).text().includes("出版年")
    })
    // 不能找文本节点
    const publicDate = publisherSpan[0].nextSibling.nodeValue.trim()

    return {
        name,
        imgurl: imgUrl,
        author,
        publicDate
    }
}

async function fetchAll(params) {
    const links = await getBooksLinks()
    const proms = links.map(link => {
        return getBookDetail(link)
    })
    return Promise.all(proms)
}

/** 
 * description: 得到书籍,保存数据库
 * return {*}
 */
async function saveToDB() {
    const books = await fetchAll()
    await Book.bulkCreate(books)
    console.log('成功保存到数据库')
}
saveToDB()