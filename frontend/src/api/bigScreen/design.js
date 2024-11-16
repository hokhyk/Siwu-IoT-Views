import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/ruoyi";

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getMapInfo(id) {
  return request({
    url: '/bigScreen/map/info/' + parseStrEmpty(id),
    method: 'get'
  })
}



// 查询用户详细
export function getMapWorld() {
  return request({
    url: '/bigScreen/map/default/worldMap/world',
    method: 'get'
  })
}






