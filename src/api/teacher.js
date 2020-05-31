import teacher from '@/utils/student'

export function getStudentList() {
  return teacher({
    url: '/t_server/student',
    method: 'post'
  })
}

export function getTopicApprove(type) {
    return teacher({
      url: '/t_server/topic_approve/' + type,
      method: 'post'
    })
}

export function approceHandle(action, row){
  var param = new URLSearchParams()
  param.append('id', row.id)
  param.append('opinion', row.opinion)

  return teacher({
    url: '/t_server/approve/' + action,
    method: 'post',
    data: param
  })
}

