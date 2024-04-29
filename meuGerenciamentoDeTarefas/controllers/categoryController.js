const Category = require('/models/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Erro", error: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: "Erro", error: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: "Erro", error: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Erro", error: error.message });
    }
};
