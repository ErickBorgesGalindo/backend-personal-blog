const getAllCategories =async (req, res) => {
    res.send('retrieving a list of categories')
};

const getSigleCategory = async (req, res) => {
    res.send('retrieving a sigle categories')
};

const createCategory = async (req, res) => {
    res.send('creating a category')
};

const deleteCategory = async(req, res) => {
    res.send('deleting a category')
};

const updateCategory = async(req, res) => {
    res.send('updating a category')
}

module.exports = {
    getAllCategories,
    getSigleCategory,
    createCategory,
    deleteCategory,
    updateCategory
};