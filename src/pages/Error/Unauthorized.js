import './style/unauthorized.scss'

export default {
  name: 'Unauthorized',

  render (h) {
    return (
      <section class="page-unauthorized">
        <h2>403</h2>
        <p>
          This page is used for user named <strong>admin</strong>.
        </p>
        <p>You are unauthorized !</p>
      </section>
    )
  }
}
