import iconArt from 'assets/svgs/art.svg';
import iconCollectibles from 'assets/svgs/collectibles.svg';
import iconSports from 'assets/svgs/sport.svg';
import iconUtility from 'assets/svgs/utility1.svg';
import iconTrading from 'assets/svgs/tradingcard.svg';

export const GroupFilters = [
  {
    value: 'all',
    label: 'All Items',
  },
  {
    value: 'single',
    label: 'Single Items',
  },
  // {
  //   value: 'bundle',
  //   label: 'Bundles',
  // },
];

export const Categories = [
  {
    id: 0,
    icon: iconArt,
    label: 'Art',
  },
  {
    id: 1,
    icon: iconCollectibles,
    label: 'Collectibles',
  },
  {
    id: 2,
    icon: iconSports,
    label: 'Sports',
  },
  {
    id: 3,
    icon: iconUtility,
    label: 'Utility',
  },
  {
    id: 4,
    icon: iconTrading,
    label: 'Trading Cards',
  },
];

export const SortByOptions = [
  {
    id: 'createdAt',
    label: 'Recently Created',
  },
  {
    id: 'oldest',
    label: 'Oldest',
  },
  {
    id: 'listedAt',
    label: 'Recently Listed',
  },
  {
    id: 'soldAt',
    label: 'Recently Sold',
  },
  {
    id: 'saleEndsAt',
    label: 'Ending Soon',
  },
  {
    id: 'price',
    label: 'Highest Price',
  },
  {
    id: 'cheapest',
    label: 'Lowest Price',
  },
  {
    id: 'lastSalePrice',
    label: 'Highest Last Sale',
  },
  {
    id: 'viewed',
    label: 'Mostly Viewed',
  },
];

const FilterConstants = {
  UPDATE_STATUS_FILTER: 'UPDATE_STATUS_FILTER',
  UPDATE_COLLECTIONS_FILTER: 'UPDATE_COLLECTIONS_FILTER',
  UPDATE_CATEGORIES_FILTER: 'UPDATE_CATEGORIES_FILTER',
  UPDATE_GROUP_TYPE_FILTER: 'UPDATE_GROUP_TYPE_FILTER',
  UPDATE_SORT_BY_FILTER: 'UPDATE_SORT_BY_FILTER',
};

export default FilterConstants;
