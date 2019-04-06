import createBaseRequest from 'UTILS/request'

const GET_RANDOM_PHOTO = '/photos/random'
const request = createBaseRequest(process.env.VUE_APP_UNSPLASH_URL, {
  Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_ID}`
})

export default function randomPhoto({
  width = 1920,
  orientation = 'landscape',
  featured = 'wallpaper-desktop'
} = {}) {
  return request.get(GET_RANDOM_PHOTO, {
    params: {
      w: width,
      orientation,
      featured
    }
  })
}
