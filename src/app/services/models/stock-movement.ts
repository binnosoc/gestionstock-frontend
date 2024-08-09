/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { Item } from '../models/item';
export interface StockMovement {
  company?: Company;
  creationDate?: string;
  id?: number;
  item?: Item;
  lastModifiedDate?: string;
  quantity?: number;
  stockMovementDate?: string;
  stockSource?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeOfStock?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
