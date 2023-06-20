/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*./{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '014':'0px 1px 4px rgba(0, 0, 0, 0.15)',
        '024':'0px 2px 4px rgba(0, 0, 0, 0.15)',
        '114': '1px 1px 4px rgba(0, 0, 0, 0.15)',
        'inside': 'inset 0 0 7px #00000020',
        'p-m': '0px 1px 4px rgba(0, 0, 0, 0.1)',
        '2-4-15':'0px 2px 4px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        '50%-gray': "#e9e9e950",
        'main-bg': '#F9F9F9',
        'gray-f0': '#F0F0F0',
        'half-white':'#ffffff50',
        'dark-gray': '#231F20',
        'light-gray': '#454545',
        'light-gray-t': '#454545cc',
        'soft-gray': '#838383',
        'gray-c8': '#C8C8C8',
        'gray-d9': '#D9D9D9',
        'gray-a7':'#A7A8A9',
        'transparent-gray':'#7983834d',
        'soft-black': '#231F20',
        'transparent-black': '#00000020',
        'black-02':'#00000020',
        'half-black': '#00000050',
        'black-70':'#00000070',
        'mint-green': '#66B659',
        'mint-green-10': '#66B65910',
        'light-red':'#FFEEEE',
        'red': '#D14D56',
        'warning-red': ' #EE4A4A'
        
      },
      dropShadow: {
        'top-md': '0px -1px 3px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        '2xs': '0.813rem', //13px
        '2sm': '0.938rem', //15px
        '2base': '1.063rem', //17px
        '2lg':'1.188rem',//19px
        '1xl': '1.375rem', //22px
      },
      gridTemplateColumns: {
        '37.5':'58.8% 1fr', //600px 
      },
      height: {
        '4.5': '1.063rem',//17px
        '1.4':'1.438rem',//23px
        '7.5': '1.875rem', //30px
        '3.7':'3.75rem',//60px
        8.1:'8.125rem',//130px
        '8.5':'8.5rem',//136px
        10.6:'10.625rem',//170px
        '29': '13.75rem',//220px
        '71.5p':'71.5%',//71.5%
      },
      inset: {
        4.5: '4.5rem',
      },
      lineHeight: {
        '2': '0.688rem',//11px
        '3.4': '0.813rem',//13px
        '3.5': '0.875rem',//14px
        '4.4': '1.063rem',//17px
        '4.5': '1.125rem',//18px
        '4.6': '1.188rem',//19px
        '5.5': '1.375rem',//22px
        '5.6':'1.438rem'//23px
      },
      margin: {
        '0.25': '0.063rem',//1px
        '0.75':'0.188rem',//3px
        '1.25': '0.313rem',//5px
        4.6: '1.188rem',//19px
        '7.5':'1.875rem', //30px
        '8.5': '2.188rem'//35px
      },
      maxWidth: {
        '7.1': '7.188rem', //115px
        8.1:'8.125rem',//130px
        '8.5': '8.563rem', //137px
        12.5:'12.5rem',//200px
        '13': '13.75rem', //220px
        '16.8':'16.875rem',//270px
        '22.7': '22.75rem',//364px
        '24':'24rem',//384px
        '24.6': '24.625rem',//394px
        '25.8': '25.875rem',//414px
        '26.2':'26.25rem',//420px
        '28.3': '28.375rem',//454px
        '35.8':'35.813rem',//573px
        '49.6':'49.688rem',//795px
        '66.2': '66.25rem', //1060px
        '69.5': '70.75rem',//1112px
        '90':'90rem',//1440px
        'screen': '100vw',

      },
      maxHeight: {
        '8.5':'8.5rem',//136px
        '16.2': '21.75rem',//260px
        '25.6':'25.625rem',//410px
        '31.2': '31.25rem',//500px
        '36.4': '36.438rem',//583px
        '40.2':'40.25rem',//644px
        '90p':'90%'
      },
      minHeight: {
        '3.6':'3.688rem',//59px
        '4.1':'4.188rem',//67px
        '4.5': '4.5rem', //72px
        '6.5': '6.563rem',//105px
        6.8: '6.875rem',//110px
        '7.1': '7.188rem', //115px
        '8.6': '8.688rem',//139px
        '12':'12rem',//192px
        '31.2': '31.25rem',//500px
        '31.5':'31.563rem',//505px
        '34.3':'34.375rem',//550px
      },
      minWidth: {
        '3.3':'3.375rem',//54px
        '6.2':'6.25rem',//100px
        '6.8': '6.888rem', //115px
        '7.1': '7.188rem', //115px
        '8.1': '8.125rem',//130px
        '11': '11rem',//176px
        '12': '11.625rem',//186px
        '12.01':'12rem',//192px
        '13': '13.75rem', //220px
        '20.1': '20.125rem', //322px
        '25.8': '25.875rem',//414px
      },
      padding: {
        '0.25': '1px',
        0.75:'0.188rem',//3px
        '1.4': '0.313rem',//5px
        '1.6': '0.438rem',//7px
        '2.1': '0.563rem',//9px
        '2.6': '0.719rem',//11.5px
        '3.6': '0.938rem',//15px
        '4.1': '1.094rem',//17px
        '6.5': '1.625rem',//26px
        '8.5': '2.188rem',//35px
        '9.5': '2.375rem',//38px
        '12.5':'3.125rem',//50px
        '25':  '6.563rem'//105px
      },
      screens: {
        'mobile': '28rem',
      },
      spacing: {
        3.6: '0.938rem',//15px
        5.1: '1.313rem',//21px
        7.5: '1.875rem',//30px
        10.5: '2.625rem',//45px
        13: '3.125rem',//50px
        17: '4.375rem',//70px
      },
      transitionProperty: {
        'height': 'height',
        'brder-radius': 'border-radius',
        'filter': 'filter',
        'padding':'padding'
      },
      translate: {
        '0.25':'0.063rem'
      },
      width: {
        '4.5': '1.063rem',//17px
        '1.1': '1.125rem',//18px
        1.3: '1.313rem',//21px
        '1.4':'1.438rem',//23px
        '7.4':'1.625rem',//26px
        '7.5': '1.875rem', //30px,
        3.2:'3.238rem',//52px
        '3.7':'3.75rem',//60px
        14.5: '3.875rem',//62px
        '17': '4.6.88', //75px
        5.1: '5.188rem',//83px
        5.3:'5.313rem',//85px
        5.2: '6.25rem',//100px
        8.1:'8.125rem',//130px
        8.4: '8.438rem',//135px
        10.6:'10.625rem',//170px
        11.2:'11.25rem',//180px
        '29': '13.75rem',//220px
        '16.8': '16.875rem',//270px
        '20.8p':'20.87%',//20.8%
        '26p':'26.5%',//26%
        '32p': '32%',  //32%
        '43p':'43%' //43%
      },   
      zIndex: {
        5: 5,
        100:100,
      },
      borderRadius:{
        '2sm':'4px',
      },
      borderWidth: {
        '0.5':'0.5px',
      },
      invert: {
        50:'.7'
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}