import manager from '@/utils/manager'

export function getNews(){
  return manager({
    url: '/m_server/news',
    method: 'post',
  })
}

export function getTeacherList() {
  return manager({
    url: '/m_server/student',
    method: 'post'
  })
}

export function getTopicApprove(type) {
    return manager({
      url: '/m_server/approve/type/' + type,
      method: 'post'
    })
}

export function approceHandle(action, id, opinion){
  var param = new URLSearchParams()
  param.append('id', id)
  param.append('opinion', opinion)
  return manager({
    url: '/m_server/approve/action/' + action,
    method: 'post',
    data: param
  })
}


export function updateMenuState(json){
  // alert(json)
  var param = new URLSearchParams()
  param.append('json', JSON.stringify(json))

  return manager({
    url: '/m_server/update_menu',
    method: 'post',
    data: param
  })
}
