#!/usr/bin/env python3
import requests
import json
import argparse

class ShenyandayiScraper:
    """A scraper for the Shenyandayi dictionary API"""
    
    BASE_URL = 'https://www.shenyandayi.com/api/v1/words/pc/semantic/defi/'
    # 看我 
    def __init__(self):
        self.session = requests.Session()
        self.headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
            'content-type': 'application/json',
            'origin': 'https://www.shenyandayi.com',
            'referer': 'https://www.shenyandayi.com/wantWordsResult',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'g-id': '4df90e85c36faa8374fca9efdd484009',
            's-id': 'OUNWNWZo-0599-8840-1bUg-WZ17D145IO39'
        }
    
    def search_word(self, query, lang="zh", defi_lang="enen", category="1001", is_filter="1"):
        """Search for a word in the dictionary
        
        Args:
            query (str): The word to search for
            lang (str): The language of the query (default: zh for Chinese)
            defi_lang (str): The language for definitions (default: enen for English)
            category (str): Category ID (default: 1001)
            is_filter (str): Filter flag (default: 1)
            
        Returns:
            dict: The JSON response from the API
        """
        payload = {
            "query": query,
            "lang": lang,
            "defi_lang": defi_lang,
            "category": category,
            "is_filter": is_filter
        }
        
        try:
            response = self.session.post(
                self.BASE_URL,
                headers=self.headers,
                json=payload
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error making request: {e}")
            return None
    
    def pretty_print_result(self, result):
        """Print the result in a readable format
        
        Args:
            result (dict): The JSON response from the API
        """
        if not result:
            print("No results found or error occurred.")
            return
        
        print(json.dumps(result, ensure_ascii=False, indent=2))
        
        # You can customize this to extract specific information from the response
        if 'data' in result and result['data']:
            print("\nExtracted Information:")
            # Extract and print relevant information based on the API response structure
            # This will need to be adjusted based on the actual response structure
            if 'words' in result['data']:
                for word in result['data']['words']:
                    if 'text' in word:
                        print(f"Word: {word['text']}")
                    if 'definitions' in word:
                        print("Definitions:")
                        for definition in word['definitions']:
                            print(f"  - {definition}")
                    print()

def main():
    parser = argparse.ArgumentParser(description='Scrape word definitions from Shenyandayi dictionary')
    parser.add_argument('query', help='The word to search for')
    parser.add_argument('--lang', default='zh', help='Language of the query (default: zh)')
    parser.add_argument('--defi-lang', default='enen', help='Language for definitions (default: enen)')
    parser.add_argument('--category', default='1001', help='Category ID (default: 1001)')
    parser.add_argument('--filter', default='1', help='Filter flag (default: 1)')
    parser.add_argument('--raw', action='store_true', help='Print raw JSON response')
    
    args = parser.parse_args()
    
    scraper = ShenyandayiScraper()
    result = scraper.search_word(
        query=args.query,
        lang=args.lang,
        defi_lang=args.defi_lang,
        category=args.category,
        is_filter=args.filter
    )
    
    if args.raw:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        scraper.pretty_print_result(result)

if __name__ == "__main__":
    main()
