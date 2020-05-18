import test from '@/utils/test'

export function fileupload() {
  return test({
    url: '/test/upload',
    method: 'post'
  })
}

