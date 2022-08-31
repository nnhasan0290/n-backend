class ApiFeature {
  constructor(products, queryString) {
    this.products = products;
    this.queryString = queryString;
    this.total_products;
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};
    this.products = this.products.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryString };
    const removable = ["keyword", "page", "sort"];
    removable.forEach((each) => delete queryCopy[each]);
    this.products.find({ ...queryCopy });
    this.products.find();
    return this;
  }
  sort() {
    const sort_method = this.queryString.sort;
    if(sort_method){
      let sliced = sort_method.slice(-5);
      sliced = sliced ==="iname"? "name" : sliced;
      const antiValue = sort_method.length >5 ? -1 : "";
      this.products.sort([[sliced,antiValue ]]);
    }
    return this;
  }
  categorize() {
    const category = this.queryString.category
      ? {
          category: {
            $regex: this.queryString.category,
            $options: "i",
          },
        }
      : {};
    this.products = this.products.find({ ...category });
    return this;
  }

  pagination(resultPerPage) {
    const current_page = this.queryString.page || 1;
    const skip = resultPerPage * (current_page - 1);
    this.products = this.products.limit(resultPerPage).skip(skip);
    return this;
  }
}
export default ApiFeature;
