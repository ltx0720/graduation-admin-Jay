import manager from '@/utils/manager'

export function getNews() {
  return manager({
    url: '/m_server/news',
    method: 'post',
  })
}

export function getTopicApprove(type) {
  return manager({
    url: '/m_server/approve/type/' + type,
    method: 'post'
  })
}

export function approceHandle(action, id, opinion) {
  var param = new URLSearchParams()
  param.append('id', id)
  param.append('opinion', opinion)
  return manager({
    url: '/m_server/approve/action/' + action,
    method: 'post',
    data: param
  })
}


export function updateMenuState(json) {
  // alert(json)
  var param = new URLSearchParams()
  param.append('json', JSON.stringify(json))

  return manager({
    url: '/m_server/update_menu',
    method: 'post',
    data: param
  })
}


export function managerPublish(title, content) {
  var param = new URLSearchParams()
  param.append('content', content)
  param.append('title', title)

  return common({
    url: '/m_server/publish',
    method: 'post',
    data: param
  })
}

export function getShowTeacherList() {
  return manager({
    url: '/m_server/teacher',
    method: 'post'
  })
}

export function submitTeacher(data) {
  var param = new URLSearchParams()
  param.append('teacher', JSON.stringify(data))

  return manager({
    url: '/m_server/submit_teacher',
    method: 'post',
    data: param
  })
}

export function getSelectTeacherList() {
  return manager({
    url: '/m_server/not_publish_teacher',
    method: 'post'
  })
}

export function changeState(id, state) {
  var param = new URLSearchParams();
  param.append('id', id);
  param.append('state', state);

  return manager({
    url: '/m_server/change/state',
    method: 'post',
    data: param
  })
}

