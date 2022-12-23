export class Product {
  id?: number;
  productName!: string;
  stock: number | undefined;
  defination: string | undefined;
  unitPrice: number | undefined;
  categoryId: number | undefined;
  categoryName: string | undefined;
  sellerName: string | undefined;
  sellerId: string | undefined;
  photoUrl: string | undefined;
}
