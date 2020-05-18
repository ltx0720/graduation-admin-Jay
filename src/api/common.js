import common from '@/utils/common'

export function getNews() {
  return common({
    url: '/c_server/c_news',
    method: 'post',
  })
}

export function getTeacherNews() {
  return common({
    url: '/c_server/t_news',
    method: 'post',
  })
}


export function teacherPublish(content) {
  var param = new URLSearchParams()
  param.append('content', content)

  return common({
    url: '/c_server/t_publish',
    method: 'post',
    data: param
  })
}

