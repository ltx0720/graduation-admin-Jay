import student from '@/utils/student'

export function getNews() {
  return student({
    url: '/s_server/news',
    method: 'post'
  })
}

export function topicList(){
  return student({
    url: '/s_server/topic',
    method: 'post'
  })
}

export function getSelectTeacher(){
  return student({
    url: '/s_server/select_teacher',
    method: 'post'
  })
}

export function isSelected(){
  return student({
    url: '/s_server/isselected_teacher',
    method: 'post'
  })
}

export function selectTeacher(teacher_id){
  var param = new URLSearchParams()
  param.append('teacher_id', teacher_id)

  return student({
    url: '/s_server/select',
    method: 'post',
    data: param
  })
}

export function isSelectedTopic(){
  return student({
    url: '/s_server/isselected_topic',
    method: 'post'
  })
}

export function selectTopic(topic_id){
  var param = new URLSearchParams()
  param.append('topic_id', topic_id)

  return student({
    url: '/s_server/select_topic',
    method: 'post',
    data: param
  })
}




