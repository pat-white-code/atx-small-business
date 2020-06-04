const express = require('express');
const router = express.Router();
const controller = require('../controllers/businesses');

router.get('/:userId', controller.getUserBusinesses);
router.post('/post/:userId', controller.createUserBusiness);
router.delete('/delete/:businessId', controller.deleteUserBusiness);
router.put('/update/:businessId', controller.editUserBusiness);

module.exports = router;