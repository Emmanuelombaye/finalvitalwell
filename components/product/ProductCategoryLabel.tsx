type ProductCategoryLabelProps = {
  category: string;
  className?: string;
};

export function ProductCategoryLabel({ category, className = "" }: ProductCategoryLabelProps) {
  return (
    <p className={`product-category ${className}`.trim()}>
      <span className="product-category__dot" aria-hidden />
      <span className="product-category__text">{category}</span>
    </p>
  );
}
