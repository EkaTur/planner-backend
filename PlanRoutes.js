const { Router } = require('express');
const { getPlan, savePlans, deletePlan, editPlan  } = require('./PlanController');
const router = Router();

router.get('/', getPlan);
router.post('/savePlans', savePlans);
router.post('/deletePlan', deletePlan);
router.put('/editPlan', editPlan);

module.exports = router;