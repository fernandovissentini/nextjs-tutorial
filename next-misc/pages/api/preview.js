export default function handler(req, res) {
  res.setPreviewData({user: 'Fernando'})
  res.redirect(req.query.redirect)
}
