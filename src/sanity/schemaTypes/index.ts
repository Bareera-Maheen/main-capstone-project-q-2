import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './product'
import orderSchema from './order'
import reviewSchema from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, orderSchema, reviewSchema],
}
