import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Mi-carrito',
    icon: 'nb-keypad',
    link: '/pages/tables/mi-carrito',
  },
  {
    title: 'Categorias',
    group: true,
  },
  {
    title: 'Todos los Productos',
    icon: 'nb-star',
    link: '/pages/tables/productos/0',
  },
    {  
      title: 'Bebidas',
      icon: 'ion-beer',
      children: [
        {      
          title: 'Gaseosas',
          children: [
            {          
              title: 'Con azúcar',
              link: '/pages/tables/productos/2',
            },
            {          
              title: 'Sin azúcar',
              link: '/pages/tables/productos/3',
            }
          ]
        }
      ]
    },
    {  
      title: 'Desayunos',
      icon:'nb-coffee-maker',
      children: [
        {      
          title: 'Fake 1',
          children: [
            {          
              title: 'Fake 2',
              link: '/pages/tables/productos/5'
            },
            {          
              title: 'Fake 3',
              children: [
                {              
                  title: 'Fake 4',
                  link: '/pages/tables/productos/7'
                }
              ]
            }
          ]
        }
      ]
    },
    {  
      title: 'Almuerzos',
      icon:'ion-pizza',
      children: [
        {      
          title: 'Fake 5',
          link: '/pages/tables/productos/9'
        },
        {      
          title: 'Fake 6',
          link: '/pages/tables/productos/10'
        }
      ]
    },
    {  
      title: 'Vinos',
      icon:'nb-drop',
      children: [
        {      
          title: 'Fake 8',
          link: '/pages/tables/productos/12'
        },
        {      
          title:'Fake 9',
          link: '/pages/tables/productos/13'
        }
      ]
    }
  ]
  
  
