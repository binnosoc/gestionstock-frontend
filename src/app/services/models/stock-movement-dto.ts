/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { ItemDto } from '../models/item-dto';
export interface StockMovementDto {
  company?: Company;
  id?: number;
  item?: ItemDto;
  quantity?: number;
  stockMovementDate?: string;
  stockSource?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeOfStock?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
