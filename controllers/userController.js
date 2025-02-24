const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    }
});

const MenuItem = mongoose.model("MenuItem", userSchema);

exports.addMenu = async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: "Name and price are required." });
    }

    try {
        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.getMenu = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json({ data: menuItems });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
