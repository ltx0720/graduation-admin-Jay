import manager from '@/utils/manager'

export function getTeacherList() {
  return manager({
    url: '/m_server/student',
    method: 'post'
  })
}


export function getTopicApprove(type) {
    return manager({
      url: '/m_server/topic_approve/' + type,
      method: 'post'
    })
}

export function approceHandle(action, id){
  var param = new URLSearchParams()
  param.append('id', id)
  return teacher({
    url: '/m_server/approve/' + action,
    method: 'post',
    data: param
  })
}

