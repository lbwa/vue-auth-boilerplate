/**
 * This map can be stored by back-end, rather than front-end for implement
 * real-time route access edit.
 */
export default {
  admin: {
    dashboard: ['sudo', 'admin'],
    table: ['sudo', 'admin']
  },
  private: {
    admin: ['super admin', 'admin'],
    user: ['user']
  }
}
