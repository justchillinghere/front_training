/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
theme: {
        extend: {
          fontFamily: {
            // sans: ['PT Root UI', 'sans-serif'],
            // serif: ['Merriweather', 'serif'],
            sans: ['PT Root UI'],
            //pt_root_ui: 
          },
		  letterSpacing: {
			widestDesigned: '0.14em',
		  },
		  textDecorationThickness: {
			05: "0.5px",
		  },
          fontSize: {
            label_1: ['16px',{lineHeight: '', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '2px' }],
            label_2: ['16px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            p: ['24px',{lineHeight: '', fontWeight: '400', letterSpacing: '' }],
            h4: ['32px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h3: ['48px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h2: ['64px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h1: ['160px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            label_1_sm: ['16px',{lineHeight: '', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '2px' }],
            label_2_sm: ['14px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            menu_sm: ['24px',{lineHeight: '', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '2px' }],
            p_sm: ['20px',{lineHeight: '', fontWeight: '400', letterSpacing: '' }],
            h4_sm: ['32px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h3_sm: ['32px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h2_sm: ['40px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }],
            h1_sm: ['48px',{lineHeight: '', fontWeight: '500', letterSpacing: '' }]
          },
          colors: {
            clifford: '#da373d',
            black: '#000',
            gray: {
              200: '#FFFFFF',
              400: '#804500',
              600: '#EE9F43',
            },
            purple: {
              200: '#7C3C9A',
              400: '#8362F6',
              600: '#5616DE',
            },
            yellow: '#EE9F43',
            brown: '#804500',
            blue: '#3FDCFF',
        }
    }

}
}