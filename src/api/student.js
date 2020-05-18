import student from '@/utils/student'

export function getNews() {
  return student({
    url: '/c_server/c_news',
    method: 'post'
  })
}

export function getSelectTeacher(){
  return student({
    url: '/s_server/select_teacher',
    method: 'post'
  })
}





