const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

exports.addMenu = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: "Name and price are required" });
        }
        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMenu = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateMenu = async (req, res) => {
    try {
       const { id } = req.params;

       const {name, description, price} = req.body;

       if(!name || !price){
        return res.status(400).json({ message: "Name and price are required" });
       }
       const updatedItem = await menuItem.findByIdAndUpdate(id, 
        {name,
            description,
            price
        },
        {new: true,
        runValidators: true}
       )
       if(!updatedItem){
        res.status(400).json({message: "Item not found"})
       }
       res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.json({ message: "Menu item deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
