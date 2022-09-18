// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id:'instruments-page',
            title: 'Instruments',
            type: 'item',
            url: '/instruments-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id:'transactions-page',
            title: 'Transactions',
            type: 'item',
            url: '/transactions-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
