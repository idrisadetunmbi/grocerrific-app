import { GroceryItem } from '../models';

export default new class {
  get = async (req, res) => {
    const items = await GroceryItem.find();
    return res.status(200).json({
      data: items,
    });
  }

  create = async (req, res) => {
    try {
      const item = new GroceryItem(req.body);
      await item.save();
      return res.status(200).json({ data: item });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const item = await GroceryItem
        .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      return res.status(200).json({ data: item });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      await GroceryItem.deleteOne({ _id: req.params.id });
      return res.status(200).send({ message: 'Item deleted successfully' });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}();
