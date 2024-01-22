/*
 * @Description: 
 * @Version: 
 * @Author: liupf
 * @Date: 2021-12-01 09:55:05
 * @LastEditors: liupf
 * @LastEditTime: 2021-12-03 11:11:34
 */
tinymce.IconManager.add('custom', {
  icons: {
    'image': '<svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M868.751 199.844H155.25a44.595 44.595 0 0 0-44.596 44.595v431.068h802.688V244.44a44.595 44.595 0 0 0-44.59-44.595z" fill="#98DCF0"/><path d="M609.884 496.988l-154.946 178.52h309.867l-154.92-178.52z" fill="#699B54"/><path d="M583.066 675.512L376.53 437.535 169.99 675.512h-59.337v104.044a44.595 44.595 0 0 0 44.596 44.6h713.497c24.627 0 44.595-19.968 44.595-44.6V675.507l-330.275.005z" fill="#80BB67"/><path d="M705.234 348.488c-.015 32.834 26.593 59.463 59.433 59.479 32.834.01 59.464-26.599 59.479-59.438v-.041c.01-32.84-26.598-59.47-59.433-59.48-32.84-.01-59.469 26.599-59.48 59.434v.046z" fill="#FFE68E"/></svg>',
    'embed': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M829.7,98.2H204.6C144,98.2,97.3,144.6,97.3,204.9V826.8c0,55.7,46.6,102.1,102.6,102.1H825c56,0,102.6-46.4,102.6-102.1V204.9C932.3,144.6,885.7,98.2,829.7,98.2z" fill="#40A9FF"/><path d="M649.4,558.1L439.5,678.8c-28,13.9-65.3-4.6-65.3-37.1V391.1c0-32.5,37.3-55.7,65.3-37.1L649.4,483.9c28,18.6,28,55.7,0,74.3z" fill="#FFF"/></svg>',
    'table': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M960,0H64C25.6,0,0,25.6,0,64V960c0,38.4,25.6,64,64,64H960c38.4,0,64-25.6,64-64V64C1024,25.6,998.4,0,960,0zm0,960H64V256H960V960z" fill="#61A3FF"/><path d="M320,256h64V960H320zm320,0h64V960H640z" fill="#61A3FF"/><path d="M64,448H960v64H64zm0,256H960v64H64z" fill="#61A3FF"/></svg>',
    'insert-time': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M511.846 859.136c-191.16 0-347.555-156.396-347.555-347.546s156.395-347.555 347.555-347.555S859.392 320.43 859.392 511.59c0 192.727-156.396 347.546-347.546 347.546zm0-631.91c-156.395 0-284.364 128-284.364 284.364s128 284.365 284.364 284.365 284.365-128 284.365-284.365-128-284.364-284.365-284.364zm0 0" fill="#1F91F2"/><path d="M638.218 574.771H480.256a31.683 31.683 0 0 1-31.6-31.59V353.608a31.6 31.6 0 0 1 63.19 0V511.59h126.372a31.59 31.59 0 1 1 0 63.191zm0 0" fill="#FC7265"/></svg>',
    'page-break': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M87,10.2H906.2V414.7H87z" fill="#3a7bd2"/><path d="M133.1,10.2h727V368.6h-727z" fill="#f1f4fb"/><path d="M670.7,655.4V609.3H87v404.5h46.1V655.4zM855,875.5h51.2v138.2H855z" fill="#3a7bd2"/><path d="M670.7,875.5V655.3H133.1v358.4H855V875.5z" fill="#f1f4fb"/><path d="M906.2,875.5V824.3H721.9v-215H670.7V875.5z" fill="#3a7bd2"/><path d="M906.2,824.3L870.4,860.1,691.2,655.3,721.9,609.2z" fill="#3a7bd2"/><path d="M721.9,686.1V824.3H839.7z" fill="#f1f4fb"/></svg>',
    'fullscreen': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M112,112H320a48,48,0,1,0,0-96H64A48,48,0,0,0,16,64V320a48,48,0,1,0,96,0V112zm800,0V320a48,48,0,1,0,96,0V64A48,48,0,0,0,960,16H704a48,48,0,1,0,0,96H912zM112,912V704a48,48,0,1,0-96,0V960c0,26.5,21.5,48,48,48H320a48,48,0,1,0,0-96H112zm800,0H704a48,48,0,1,0,0,96H960a48,48,0,0,0,48-48V704a48,48,0,1,0-96,0V912z" fill="#1c92f9"/><path d="M30.1,97.9l224,224a48,48,0,0,0,67.8-67.8L97.9,30.1A48,48,0,0,0,30.1,97.9zm896-67.8l-224,224a48,48,0,0,0,67.8,67.8l224-224A48,48,0,0,0,926.1,30.1zM97.9,993.9l224-224A48,48,0,0,0,254.1,702.1l-224,224a48,48,0,0,0,67.8,67.8zm896-67.8l-224-224a48,48,0,0,0-67.8,67.8l224,224a48,48,0,0,0,67.8-67.8z" fill="#1c92f9"/></svg>',
    'subscript': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M533.3,256h85.3L277.3,682.7H192L533.3,256z" fill="#333"/><path d="M277.3,256H192L533.3,682.7h85.3L277.3,256z" fill="#333"/><path d="M674.1,746.7V729.6c4.3-12.8,12.8-25.6,21.3-38.4,8.5-12.8,25.6-25.6,42.7-42.7,21.3-17.1,34.1-29.9,42.7-42.7,8.5-12.8,12.8-21.3,12.8-34.1,0-12.8-4.3-25.6-12.8-34.1-8.5-8.5-21.3-12.8-34.1-12.8-12.8,0-25.6,4.3-34.1,12.8-8.5,8.5-12.8,17.1-12.8,29.9l-21.3-4.3c0-17.1,8.5-29.9,21.3-42.7,12.8-12.8,29.9-17.1,46.9-17.1,21.3,0,38.4,4.3,51.2,17.1,12.8,12.8,17.1,25.6,17.1,46.9,0,8.5,0,21.3-4.3,29.9-4.3,8.5-8.5,17.1-17.1,25.6-8.5,8.5-21.3,21.3-38.4,34.1-29.9,25.6-46.9,51.2-55.5,68.3H814.9v17.1H669.8z" fill="#FF8C11"/></svg>',
    'superscript': '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M533.3,384h85.3L277.3,810.7H192L533.3,384z" fill="#333"/><path d="M277.3,384H192L533.3,810.7h85.3L277.3,384z" fill="#333"/><path d="M674.1,448V430.9c4.3-12.8,12.8-25.6,21.3-38.4,8.5-12.8,25.6-25.6,42.7-42.7,21.3-17.1,34.1-29.9,42.7-42.7,8.5-12.8,12.8-21.3,12.8-34.1,0-12.8-4.3-25.6-12.8-34.1-8.5-8.5-21.3-12.8-34.1-12.8-12.8,0-25.6,4.3-34.1,12.8-8.5,8.5-12.8,17.1-12.8,29.9l-21.3-4.3c0-17.1,8.5-29.9,21.3-42.7,8.5-8.5,25.6-12.8,42.7-12.8,21.3,0,38.4,4.3,51.2,17.1,12.8,12.8,17.1,25.6,17.1,46.9,0,8.5,0,21.3-4.3,29.9-4.3,8.5-8.5,17.1-17.1,25.6-8.5,8.5-21.3,21.3-38.4,34.1-29.9,25.6-46.9,51.2-55.5,68.3H814.9v17.1H674.1z" fill="#EF6500"/></svg>',
    'bdmap': '<svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M501.191 0C353.28 0 232.96 120.32 232.96 268.231c0 142.791 240.356 396.231 250.596 407.04 4.55 4.551 11.093 7.396 17.635 7.396h.569c6.827 0 13.369-3.13 17.92-8.25l83.342-95.288c110.65-135.396 166.685-240.071 166.685-310.613C769.422 120.32 649.102 0 501.19 0zm0 389.973c-67.413 0-121.742-54.613-121.742-121.742 0-67.413 54.613-121.742 121.742-121.742 67.413 0 121.742 54.613 121.742 121.742s-54.329 121.742-121.742 121.742zm0 0" fill="#FF5338"/><path d="M696.889 1024c-5.12 0-10.525-.853-15.36-2.844l-354.133-136.25-268.8 107.52c-13.085 5.405-27.876 3.698-39.823-4.266A42.667 42.667 0 0 1 0 952.889V469.333c0-11.377 4.551-22.186 12.516-30.15l56.888-56.89a42.382 42.382 0 0 1 60.303 0c16.782 16.783 16.782 43.805 0 60.303l-44.374 44.373v402.773l225.85-90.453c9.955-3.982 21.048-3.982 31.288-.285l354.133 136.25 242.063-96.712v-442.88c-19.911 7.111-42.667-1.706-52.338-21.049-10.525-21.049-1.991-46.649 19.058-57.173l56.889-28.444c13.084-6.543 29.013-5.974 41.528 1.99A42.363 42.363 0 0 1 1024 327.112v540.445c0 17.35-10.524 33.28-26.738 39.537l-284.444 113.778c-5.12 1.991-10.525 3.129-15.93 3.129z" fill="#C8C8C8"/></svg>',
    'axupimgs': '<svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M752.512 948.736H257.536c-112.384 0-203.52-91.136-203.52-203.52V250.24c0-112.384 91.136-203.52 203.52-203.52h494.976c112.384 0 203.52 91.136 203.52 203.52v494.976c0 112.384-91.136 203.52-203.52 203.52z" fill="#fff"/><path d="M516.352 471.68c-3.968-4.992-7.552-10.24-10.624-15.744-3.2 5.376-7.04 10.496-11.136 15.488 4.224.512 8.32 1.28 12.544 1.28 3.072-.128 6.144-.768 9.216-1.024z" fill="#FFA943"/><path d="M488.704 319.744c7.68 7.68 13.568 16.512 18.56 25.6 4.736-8.064 10.112-15.744 17.024-22.656l81.792-81.792c3.712-3.712 7.808-6.656 11.776-9.728-6.656-55.552-53.504-98.816-110.848-98.816-56.832 0-103.168 42.24-110.72 97.024 3.456 2.816 7.168 5.248 10.368 8.576l82.048 81.792z" fill="#FF9A44"/><path d="M488.704 478.464c2.176-2.176 3.84-4.736 5.888-7.168-6.4-.768-12.672-1.92-18.688-3.712a115.381 115.381 0 0 1 3.072 18.816c3.2-2.56 6.656-4.864 9.728-7.936zM367.616 383.36c10.88 0 21.248 2.048 31.232 4.992-2.304-8.96-3.968-18.304-3.968-28.032V244.608c0-5.248.896-10.24 1.536-15.232-44.032-34.56-107.648-32.128-148.224 8.576-40.192 40.192-43.008 102.912-9.728 146.816 4.48-.512 8.832-1.408 13.44-1.408h115.712z" fill="#FF7769"/><path d="M394.88 360.32c0 9.728 1.664 19.072 3.968 28.032 37.76 11.008 67.2 40.96 77.056 79.232 6.016 1.792 12.288 2.944 18.688 3.712 4.224-4.992 7.936-9.984 11.136-15.488-18.944-34.432-18.432-76.416 1.536-110.464-4.992-9.088-10.88-17.92-18.56-25.6l-81.792-81.792c-3.2-3.2-6.912-5.76-10.368-8.576-.64 4.992-1.536 9.984-1.536 15.232V360.32z" fill="#FF5F1F"/><path d="M478.976 486.4c-4.992 3.968-10.24 7.552-15.744 10.624 5.376 3.2 10.496 7.04 15.488 11.136.512-4.224 1.28-8.32 1.28-12.544-.128-3.2-.896-6.144-1.024-9.216zM327.04 514.048c7.68-7.68 16.512-13.568 25.6-18.56-8.064-4.736-15.744-10.112-22.656-17.024l-81.792-81.792c-3.712-3.712-6.656-7.808-9.728-11.776-55.552 6.656-98.816 53.504-98.816 110.848 0 56.832 42.24 103.168 97.024 110.72 2.816-3.456 5.248-7.168 8.448-10.368l81.92-82.048z" fill="#D684A9"/><path d="M329.984 478.464c6.912 6.912 14.592 12.288 22.656 17.024 34.432-18.944 76.416-18.432 110.464 1.536 5.504-3.072 10.752-6.528 15.744-10.624-.512-6.4-1.408-12.8-3.072-18.816-37.76-11.008-67.2-40.96-77.056-79.232-9.984-2.944-20.352-4.992-31.232-4.992H251.776c-4.608 0-8.96.768-13.44 1.408 3.072 4.096 6.016 8.192 9.728 11.776l81.92 81.92z" fill="#DC2F1B"/><path d="M398.848 388.352c9.856 38.272 39.296 68.224 77.056 79.232-9.856-38.272-39.296-68.224-77.056-79.232z" fill="#B1190A"/><path d="M478.592 508.16c-.768 6.4-1.92 12.672-3.712 18.688a115.381 115.381 0 0 1 18.816-3.072c-2.56-3.328-4.992-6.784-7.936-9.728-2.304-2.176-4.864-3.84-7.168-5.888zm-87.936 126.976c0-10.88 2.048-21.248 4.992-31.232-8.96 2.304-18.304 3.968-28.032 3.968H251.904c-5.248 0-10.24-.896-15.232-1.536-34.56 44.032-32.128 107.648 8.448 148.224 40.192 40.192 102.912 43.008 146.816 9.728-.512-4.48-1.408-8.832-1.408-13.44V635.136z" fill="#A48ABC"/><path d="M367.616 607.872c9.728 0 19.072-1.664 28.032-3.968 11.008-37.76 40.96-67.2 79.232-77.056 1.792-6.016 2.944-12.288 3.712-18.688-4.992-4.224-9.984-7.936-15.488-11.136-34.432 18.944-76.416 18.432-110.464-1.536-9.088 4.992-17.92 10.88-25.6 18.56l-81.792 81.792c-3.2 3.2-5.76 6.912-8.448 10.368 4.992.64 9.984 1.536 15.232 1.536h115.584z" fill="#A54569"/><path d="M352.64 495.488c34.048 20.096 76.032 20.48 110.464 1.536-34.048-20.096-76.032-20.48-110.464-1.536z" fill="#881309"/><path d="M493.696 523.776c3.968 4.992 7.552 10.24 10.624 15.744 3.2-5.376 7.04-10.496 11.136-15.488-4.224-.512-8.32-1.28-12.544-1.28-3.2.128-6.144.768-9.216 1.024z" fill="#55A3D5"/><path d="M521.344 675.712c-7.68-7.68-13.568-16.512-18.56-25.6-4.736 8.064-10.112 15.744-17.024 22.656l-81.792 81.792c-3.712 3.712-7.808 6.656-11.776 9.728 6.656 55.552 53.504 98.816 110.848 98.816 56.832 0 103.168-42.24 110.72-97.024-3.456-2.816-7.168-5.248-10.368-8.448l-82.048-81.92z" fill="#5C9FD2"/><path d="M485.76 672.768c6.912-6.912 12.288-14.592 17.024-22.656-18.944-34.432-18.432-76.416 1.536-110.464-3.072-5.504-6.528-10.752-10.624-15.744-6.4.512-12.8 1.408-18.816 3.072-11.008 37.76-40.96 67.2-79.232 77.056-2.944 9.984-4.992 20.352-4.992 31.232v115.712c0 4.608.768 8.96 1.408 13.44 4.096-3.072 8.192-6.016 11.776-9.728l81.92-81.92z" fill="#5D5092"/><path d="M395.648 603.904c38.272-9.856 68.224-39.296 79.232-77.056-38.272 9.856-68.224 39.296-79.232 77.056z" fill="#4C0C2C"/><path d="M515.456 524.16c6.4.768 12.672 1.92 18.688 3.712a115.381 115.381 0 0 1-3.072-18.816c-3.328 2.56-6.784 4.992-9.728 7.936-2.304 2.176-3.84 4.864-5.888 7.168zm126.976 87.936c-10.88 0-21.248-2.048-31.232-4.992 2.304 8.96 3.968 18.304 3.968 28.032v115.712c0 5.248-.896 10.24-1.536 15.232 44.032 34.56 107.648 32.128 148.224-8.448 40.192-40.192 43.008-102.912 9.728-146.816-4.48.512-8.832 1.408-13.44 1.408H642.432z" fill="#57BA98"/><path d="M615.168 635.136c0-9.728-1.664-19.072-3.968-28.032-37.76-11.008-67.2-40.96-77.056-79.232-6.016-1.792-12.288-2.944-18.688-3.712-4.224 4.992-7.936 9.984-11.136 15.488 18.944 34.432 18.432 76.416-1.536 110.464 4.992 9.088 10.88 17.92 18.56 25.6l81.792 81.792c3.2 3.2 6.912 5.76 10.368 8.448.64-4.992 1.536-9.984 1.536-15.232V635.136z" fill="#236996"/><path d="M502.784 650.112c20.096-34.048 20.48-76.032 1.536-110.464-20.096 34.048-20.48 76.032-1.536 110.464z" fill="#1B175B"/><path d="M870.4 499.84c0-56.832-42.24-103.168-97.024-110.72-2.816 3.456-5.248 7.168-8.576 10.368l-81.792 81.792c-7.68 7.68-16.512 13.568-25.6 18.56 8.064 4.736 15.744 10.112 22.656 17.024l81.792 81.792c3.712 3.712 6.656 7.808 9.728 11.776 55.552-6.4 98.816-53.248 98.816-110.592zm-340.224 0c0 3.2.64 6.144.896 9.216 4.992-3.968 10.24-7.552 15.744-10.624-5.376-3.2-10.496-7.04-15.488-11.136-.384 4.096-1.152 8.192-1.152 12.544z" fill="#ABCF61"/><path d="M680.064 516.992c-6.912-6.912-14.592-12.288-22.656-17.024-34.432 18.944-76.416 18.432-110.464-1.536-5.504 3.072-10.752 6.528-15.744 10.624.512 6.4 1.408 12.8 3.072 18.816 37.76 11.008 67.2 40.96 77.056 79.232 9.984 2.944 20.352 4.992 31.232 4.992h115.712c4.608 0 8.96-.768 13.44-1.408-3.072-4.096-6.016-8.192-9.728-11.776l-81.92-81.92z" fill="#209151"/><path d="M611.2 607.104c-9.856-38.272-39.296-68.224-77.056-79.232 9.856 38.144 39.296 68.224 77.056 79.232z" fill="#003720"/><path d="M619.264 360.32c0 10.88-2.048 21.248-4.992 31.232 8.96-2.304 18.304-3.968 28.032-3.968h115.712c5.248 0 10.24.896 15.232 1.536 34.56-44.032 32.128-107.648-8.576-148.224-40.192-40.192-102.912-43.008-146.816-9.728.512 4.48 1.408 8.832 1.408 13.44V360.32zm-87.808 126.976c.768-6.4 1.92-12.672 3.712-18.688a115.381 115.381 0 0 1-18.816 3.072c2.56 3.328 4.992 6.784 7.936 9.728 2.176 2.176 4.736 3.84 7.168 5.888z" fill="#F2DF44"/><path d="M524.288 322.688c-6.912 6.912-12.288 14.592-17.024 22.656 18.944 34.432 18.432 76.416-1.536 110.464 3.072 5.504 6.528 10.752 10.624 15.744 6.4-.512 12.8-1.408 18.816-3.072 11.008-37.76 40.96-67.2 79.232-77.056 2.944-9.984 4.992-20.352 4.992-31.232V244.48c0-4.608-.768-8.96-1.408-13.44-4.096 3.072-8.192 6.016-11.776 9.728l-81.92 81.92z" fill="#D5B32C"/><path d="M507.264 345.344c-20.096 34.048-20.48 76.032-1.536 110.464 19.968-34.048 20.48-76.032 1.536-110.464z" fill="#AB520E"/><path d="M642.432 387.584c-9.728 0-19.072 1.664-28.032 3.968-11.008 37.76-40.96 67.2-79.232 77.056-1.792 6.016-2.944 12.288-3.712 18.688 4.992 4.224 9.984 7.936 15.488 11.136 34.432-18.944 76.416-18.432 110.464 1.536 9.088-4.992 17.92-10.88 25.6-18.56l81.792-81.792c3.2-3.2 5.76-6.912 8.576-10.368-4.992-.64-9.984-1.536-15.232-1.536H642.432z" fill="#81B028"/><path d="M614.4 391.552c-38.272 9.856-68.224 39.296-79.232 77.056 38.144-9.856 68.224-39.296 79.232-77.056z" fill="#51800F"/><path d="M546.944 498.432c34.048 20.096 76.032 20.48 110.464 1.536-34.048-19.968-76.032-20.48-110.464-1.536z" fill="#005007"/></svg>',
    'print': '<svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M694.857 256H329.143c-11.494 0-20.898-9.404-20.898-20.898s9.404-20.898 20.898-20.898h365.714c11.494 0 20.898 9.404 20.898 20.898S706.351 256 694.857 256z" fill="#AF8015"/><path d="M820.245 615.967h-616.49V177.633c0-45.976 37.616-83.592 83.592-83.592h449.306c45.976 0 83.592 37.616 83.592 83.592v438.334z" fill="#F2CB51"/><path d="M224.653 824.947h-47.02c-45.976 0-83.592-37.616-83.592-83.592v-83.592c0-45.975 37.616-83.592 83.592-83.592h668.734c45.976 0 83.592 37.617 83.592 83.592v83.592c0 45.976-37.616 83.592-83.592 83.592h-47.02" fill="#568289"/><path d="M736.653 929.96H287.347c-45.976 0-83.592-37.617-83.592-83.593v-83.591c0-45.976 37.616-83.592 83.592-83.592h449.306c45.976 0 83.592 37.616 83.592 83.592v83.591c0 45.976-37.616 83.592-83.592 83.592z" fill="#90B0BA"/><path d="M694.857 375.64H329.143c-11.494 0-20.898-9.403-20.898-20.897s9.404-20.898 20.898-20.898h365.714c11.494 0 20.898 9.404 20.898 20.898s-9.404 20.898-20.898 20.898zm0 120.164H329.143c-11.494 0-20.898-9.404-20.898-20.898s9.404-20.898 20.898-20.898h365.714c11.494 0 20.898 9.404 20.898 20.898s-9.404 20.898-20.898 20.898z" fill="#AF8015"/></svg>',
    'preview': '<svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 512L512 0l512.041 512L512 1024z" fill="#D33"/><path d="M.246 511.898L114.633 397.51l114.408 114.388-114.408 114.367zm795.081.061l114.388-114.388 114.387 114.388-114.387 114.388z" fill="#FFDA71"/><path d="M61.392 512L511.857 61.535 962.322 512 511.857 962.465z" fill="#ED4A4A"/><path d="M471.147 485.994c-11.672 10.853-35.63 32.354-47.712 42.593A433.92 433.92 0 0 1 469.1 615.82l-21.707 13.925-6.757-1.229H322.89V593.91h98.292a327.64 327.64 0 0 0-113.855-129.827 136.995 136.995 0 0 0 18.84-36.655 363.067 363.067 0 0 1 50.374 43.617v-150.92h38.088v174.47a581.357 581.357 0 0 0 38.498-44.028l18.43 25.597V320.125h36.04v18.635h144.777v-17.61h37.269v185.935H471.147zm-55.289 158.905a515.01 515.01 0 0 1-32.969 58.976l-30.511-13.516a487.775 487.775 0 0 0 32.15-61.432zm53.446 42.184v-33.174h222.182v33.379zm23.345-56.518v-100.75h178.154v100.75zm68.19-155.834v-36.655h-53.446v36.655zm-53.446-66.552h53.446V370.09h-53.446zm127.575 152.558H527.46v39.112h107.507zm17.2-122.866H596.06v36.655h56.109zm-56.108-67.78v37.883h56.109v-37.883z" fill="#FFDA71"/></svg>',
    'format-painter': '<svg t="1638501082129" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1932" width="24" height="24"><path d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 0.6 0.1 1.3 0.2 1.9-0.1 2-0.2 4.1-0.2 6.1 0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-0.1-4.1-0.2-6.1 0.1-0.6 0.2-1.2 0.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z" p-id="1933"></path></svg>',
    'insertObjCode': '<svg t="1638333798475"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6273" data-spm-anchor-id="a313x.7781069.0.i4" width="24" height="24"><path d="M243.167249 193.358446H488.467276a31.902741 31.902741 0 0 1 31.902742 31.902741v7.377827A26.814585 26.814585 0 0 1 493.555433 259.504481H243.167249a26.814585 26.814585 0 0 1-26.814584-26.814585v-12.516865A26.814585 26.814585 0 0 1 243.167249 193.358446zM384.516238 540.472484Q352.053799 503.735994 295.880551 504.041284c-37.754121 0-67.265429 12.008049-88.584805 36.73649-20.607034 23.354638-30.528939 53.578288-30.528939 91.02712s9.921905 67.265429 30.528939 90.620068 50.881565 36.431201 88.584805 36.431201 67.011022-12.008049 88.635687-36.07503c20.607034-22.998468 30.834229-53.171236 30.834229-90.925357s-10.278076-68.384824-30.834229-91.383292zM347.52534 690.980155c-12.109813 14.145075-29.307782 21.370257-51.644789 21.370257s-39.840266-7.530472-51.950078-22.337007-17.452377-33.836241-17.452377-58.310274 5.698735-44.063436 17.452377-58.5138 29.613071-22.693178 51.950078-22.693178c22.387889 0 39.534976 6.919893 51.644789 21.370257s17.757666 34.44682 17.757666 59.78584-6.004025 45.081067-17.757666 59.327905zM649.50743 645.542917a59.633195 59.633195 0 0 0-36.329437-19.589403 53.883578 53.883578 0 0 0 38.110292-55.25738 55.664432 55.664432 0 0 0-19.18235-44.266962c-13.738023-11.70276-33.022136-17.55414-57.343524-17.55414H462.415915v245.198264H574.965937c26.102243 0 46.709277-5.088157 61.057879-14.450365 16.841798-11.70276 25.440783-29.816597 25.440782-54.595919a60.701707 60.701707 0 0 0-11.957168-39.484095z m-142.468383-102.170183h57.547051c15.26447 0 26.102243 2.544078 33.073017 7.632234a27.781335 27.781335 0 0 1 9.820142 23.558165 32.208031 32.208031 0 0 1-9.76926 25.746072c-6.767248 5.088157-17.859429 7.937524-33.78536 7.937524H506.886403z m94.792357 169.537375a68.690113 68.690113 0 0 1-33.123899 6.665485H506.886403v-70.572731h62.686088c16.536509 0 28.59544 2.849368 36.278556 8.548103s11.092181 15.010062 11.092182 28.035743a28.849848 28.849848 0 0 1-15.26447 27.3234zM799.913338 508.824151h45.233711v165.873903c0 28.137506-5.749617 48.74454-17.452377 62.533444-13.076562 14.399483-33.683596 21.624665-62.126391 21.624665-24.779322 0-43.656383-6.869011-56.325893-20.607034s-19.589403-32.615083-19.589403-56.631182v-7.937524h45.284594v7.530471c0 28.137506 6.869011 37.143543 31.241281 37.143543 13.432733 0 22.693178-3.205539 28.900729-11.143063s5.088157-16.434746 5.088156-33.887122V508.824151z" p-id="6274" data-spm-anchor-id="a313x.7781069.0.i5" fill="#61A3FF"></path><path d="M690.568854 0.669958H102.377958v414.684757H0.004249v434.935621h102.373709c0 101.10167 71.84477 173.607901 173.811427 173.607901h645.381775v-173.607901h102.37371V415.354715h-102.37371V214.576058a25.440783 25.440783 0 0 0-8.14105-27.883097Q864.99086 141.204841 815.686623 96.683471q-37.448832-34.192412-75.966177-67.061903-15.671522-13.33097-24.779323-19.84381a64.161654 64.161654 0 0 0-10.481602-6.767248 94.894119 94.894119 0 0 0-24.982849-3.002013c-14.246838 0.254408-27.781335 11.753642-27.781334 26.153125l5.088156 244.231514h199.710144v145.012461H167.506362V65.74748h523.062492m81.715794 68.944521l5.088156 4.375814c25.847835 23.507283 46.861922 42.486107 72.455349 66.146035h-132.800885V85.947461c19.84381 17.350614 35.667977 31.088636 55.25738 48.74454zM277.868477 968.793502c-78.154084-2.035263-110.362115-63.093141-110.362115-118.401403h694.075433v118.554047z m694.329841-175.541401H50.885814V470.917385h921.312504z" p-id="6275" data-spm-anchor-id="a313x.7781069.0.i9" fill="#61A3FF"></path></svg>',
    'papersize': '<svg t="1638328237561" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3069" width="24" height="24"><path d="M256 224h502.944L928 394.016V928H256z" fill="#FFFFFF" p-id="3070"></path><path d="M768 226.336l160.32 157.44-0.224 0.224h1.28L928 928H256V224h512v2.336z m0 44.864V384h114.88L768 271.2zM736 256H288v640h608V416.32h-160V256z" fill="#5D6D7E" p-id="3071"></path><path d="M128 896V160H96V128h96v32H160v736h32v32H96v-32h32zM864 160H288v32H256V96h32v32h576V96h32v96h-32V160z" fill="#61A3FF" p-id="3072" data-spm-anchor-id="a313x.7781069.0.i26"></path></svg>',
    'paperdirection': '<svg t="1638328312702" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3334" width="24" height="24"><path d="M576 448h352v345.12L795.136 928H352v-224H96V128h351.904L576 266.592V448z" fill="#FFFFFF" p-id="3335"></path><path d="M448 128.96l0.352-0.352L574.08 256H576v1.952l0.544 0.544-0.544 0.544V416h-32V288h-128V160H128v512h192v32H96V128h352v0.96z m0 44.832V256h81.12L448 173.792zM927.04 800l0.352 0.352L800 926.08V928h-1.952l-0.544 0.544-0.544-0.544H352V448h576v352h-0.96z m-44.832 0H800v81.12L882.208 800zM896 768v-288H384v416h384v-128h128z" fill="#5D6D7E" p-id="3336"></path><path d="M784 315.808V201.44C746.112 152.416 717.856 128 704 128V96c28.416 0 62.912 30.176 108.736 90.304l3.264 4.288V315.84l52.576-47.744 21.92 19.936L800 370.176 709.504 288l21.92-19.936L784 315.84z" fill="#61A3FF" p-id="3337" data-spm-anchor-id="a313x.7781069.0.i31"></path></svg>',
    'paperPadding': '<svg t="1638328065332"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2583" width="24" height="24"><path d="M160 96h704a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z m0 32v768h704V128H160z m576 96V128h32v96h96v32h-96v512h96v32h-96v96h-32v-96H288v96H256v-96H160v-32h96V256H160V224h96V128h32v96h448z m0 32H288v512h448V256z" p-id="2584" data-spm-anchor-id="a313x.7781069.0.i15" fill="#61A3FF"></path></svg>',
    'slashHeader':'<svg t="1638353676968"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1853" width="24" height="24"><path d="M200.704 880.64c-34.816 0-61.44-26.624-61.44-61.44v-614.4c0-14.336 4.096-26.624 12.288-36.864l706.56 706.56c-6.144 2.048-14.336 4.096-22.528 4.096h-634.88z m634.88-737.28c34.816 0 61.44 26.624 61.44 61.44v614.4c0 10.24-2.048 20.48-8.192 30.72l-704.512-704.512c4.096-2.048 10.24-2.048 16.384-2.048h634.88z m0-40.96h-634.88c-57.344 0-102.4 45.056-102.4 102.4v614.4c0 57.344 45.056 102.4 102.4 102.4h634.88c57.344 0 102.4-45.056 102.4-102.4v-614.4c0-57.344-47.104-102.4-102.4-102.4z" p-id="1854"></path></svg>',
  }
});