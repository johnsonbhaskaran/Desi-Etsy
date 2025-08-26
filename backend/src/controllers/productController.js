//@desc Get all products
//@route GET /api/products
//@access public
const getAllProducts = (req, res) => {
  res.status(200).json({ message: "Get all products" });
};

//@desc Get single product
//@route GET /api/products/:id
//@access public
const getProduct = (req, res) => {
  res.status(200).json({ message: `Get product info for ${req.params.id}` });
};

//@desc Update single product
//@route PUT /api/products/:id
//@access public
const updateProduct = (req, res) => {
  res.status(200).json({ message: `Updated product info for ${req.params.id}` });
};

//@desc Create new product
//@route POST /api/products
//@access public
const createProduct = async (req, res) => {
  const reqBody = await req.body;
  console.log(reqBody);
  res.status(201).json({ message: "Created new product" });
};

//@desc Delete single product
//@route DELETE /api/products/:id
//@access public
const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Deleted product ${req.params.id}` });
};

export { getAllProducts, getProduct, updateProduct, createProduct, deleteProduct };
