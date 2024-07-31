// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.json({ message: "Get Goals" });
};

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.json({ message: "Set Goal" });
};

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
};

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
