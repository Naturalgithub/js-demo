import request from "./request";

export function getStuListApi() {
    return request({
        url: "/students",
        method: "get"
    });
}
