import fileServer from '@/utils/file-server/request'


export function getVisibleFileList() {
  return fileServer({
    url: '/query/file-list',
    method: 'post'
  })
}
