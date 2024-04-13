!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.ssim=r():t.ssim=r()}(self,(function(){return(()=>{"use strict";var t={132:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.bezkrovnySsim=void 0;var a=e(490),i=e(971);function d(t,r,e){var i=t.data,d=r.data,n=e.bitDepth,o=e.k1,h=e.k2,u=Math.pow(2,n)-1,f=Math.pow(o*u,2),v=Math.pow(h*u,2),l=a.average(i),w=a.average(d),s=a.variance(i,l),g=a.variance(d,w);return(2*l*w+f)*(2*a.covariance(i,d,l,w)+v)/((Math.pow(l,2)+Math.pow(w,2)+f)*(s+g+v))}r.bezkrovnySsim=function(t,r,e){for(var a=e.windowSize,n=Math.ceil(t.width/a),o=Math.ceil(t.height/a),h=new Array(n*o),u=0,f=0;f<t.height;f+=a)for(var v=0;v<t.width;v+=a){var l=Math.min(a,t.width-v),w=Math.min(a,t.height-f),s=i.sub(t,v,w,f,l),g=i.sub(r,v,w,f,l);h[u++]=d(s,g,e)}return{data:h,width:n,height:o}}},63:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.defaults=void 0,r.defaults={windowSize:11,k1:.01,k2:.03,bitDepth:8,downsample:"original",ssim:"weber",maxSize:256,rgb2grayVersion:"integer"}},441:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.downsample=void 0;var a=e(490),i=e(971);function d(t,r,e){var a=i.imfilter(t,r,"symmetric","same");return i.skip2d(a,[0,e,a.height],[0,e,a.width])}r.downsample=function(t,r){return"original"===r.downsample?function(t,r,e){void 0===e&&(e=256);var n=Math.min(t.width,r.height)/e,o=Math.round(n);if(o>1){var h=i.ones(o);t=d(t,h=a.divide2d(h,a.sum2d(h)),o),r=d(r,h,o)}return[t,r]}(t[0],t[1],r.maxSize):t}},607:function(t,r,e){var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.ssim=r.getOptions=void 0;var i=e(971),d=e(490),n=e(773),o=e(595),h=e(132),u=e(441),f=e(63),v=e(535),l={fast:n.ssim,original:o.originalSsim,bezkrovny:h.bezkrovnySsim,weber:v.weberSsim};function w(t){var r=a(a({},f.defaults),t);return function(t){if(Object.keys(t).forEach((function(t){if(!(t in f.defaults))throw new Error('"'+t+'" is not a valid option')})),"k1"in t&&("number"!=typeof t.k1||t.k1<0))throw new Error("Invalid k1 value. Default is "+f.defaults.k1);if("k2"in t&&("number"!=typeof t.k2||t.k2<0))throw new Error("Invalid k2 value. Default is "+f.defaults.k2);if(!(t.ssim in l))throw new Error("Invalid ssim option (use: "+Object.keys(l).join(", ")+")")}(r),r}function s(t,r,e){var a,n,o,h,f=(new Date).getTime(),v=function(t){var r=t[0],e=t[1],a=t[2];return l[a.ssim](r,e,a)}(function(t){var r=t[0],e=t[1],a=t[2],i=u.downsample([r,e],a);return[i[0],i[1],a]}((a=function(t){var r=t[0],e=t[1],a=t[2];if(r.width!==e.width||r.height!==e.height)throw new Error("Image dimensions do not match");return[r,e,a]}([t,r,w(e)]),n=a[0],o=a[1],"original"===(h=a[2]).rgb2grayVersion?[i.rgb2gray(n),i.rgb2gray(o),h]:[i.rgb2grayInteger(n),i.rgb2grayInteger(o),h])));return{mssim:void 0!==v.mssim?v.mssim:d.mean2d(v),ssim_map:v,performance:(new Date).getTime()-f}}r.getOptions=w,r.ssim=s,r.default=s},490:(t,r)=>{function e(t){return a(t)/t.length}function a(t){for(var r=0,e=0;e<t.length;e++)r+=t[e];return r}function i(t){for(var r=t.data,e=0,a=0;a<r.length;a++)e+=r[a];return e}function d(t,r){for(var e=t.data,a=t.width,i=t.height,d=new Array(e.length),n=0;n<e.length;n++)d[n]=e[n]+r;return{data:d,width:a,height:i}}function n(t,r){return"number"==typeof r?function(t,r){for(var e=t.data,a=t.width,i=t.height,d=new Array(e.length),n=0;n<e.length;n++)d[n]=e[n]*r;return{data:d,width:a,height:i}}(t,r):function(t,r){for(var e=t.data,a=t.width,i=t.height,d=r.data,n=new Array(e.length),o=0;o<e.length;o++)n[o]=e[o]*d[o];return{data:n,width:a,height:i}}(t,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.covariance=r.variance=r.mean2d=r.square2d=r.multiply2d=r.divide2d=r.subtract2d=r.add2d=r.sum2d=r.floor=r.sum=r.average=void 0,r.average=e,r.sum=a,r.floor=function(t){for(var r=new Array(t.length),e=0;e<t.length;e++)r[e]=Math.floor(t[e]);return r},r.sum2d=i,r.add2d=function(t,r){return"number"==typeof r?d(t,r):function(t,r){for(var e=t.data,a=t.width,i=t.height,d=r.data,n=new Array(e.length),o=0;o<i;o++)for(var h=o*a,u=0;u<a;u++)n[h+u]=e[h+u]+d[h+u];return{data:n,width:a,height:i}}(t,r)},r.subtract2d=function(t,r){return"number"==typeof r?d(t,-r):function(t,r){for(var e=t.data,a=t.width,i=t.height,d=r.data,n=new Array(e.length),o=0;o<i;o++)for(var h=o*a,u=0;u<a;u++)n[h+u]=e[h+u]-d[h+u];return{data:n,width:a,height:i}}(t,r)},r.divide2d=function(t,r){return"number"==typeof r?function(t,r){for(var e=t.data,a=t.width,i=t.height,d=new Array(e.length),n=0;n<e.length;n++)d[n]=e[n]/r;return{data:d,width:a,height:i}}(t,r):function(t,r){for(var e=t.data,a=t.width,i=t.height,d=r.data,n=new Array(e.length),o=0;o<e.length;o++)n[o]=e[o]/d[o];return{data:n,width:a,height:i}}(t,r)},r.multiply2d=n,r.square2d=function(t){return n(t,t)},r.mean2d=function(t){return i(t)/t.data.length},r.variance=function(t,r){void 0===r&&(r=e(t));for(var a=0,i=t.length;i--;)a+=Math.pow(t[i]-r,2);return a/t.length},r.covariance=function(t,r,a,i){void 0===a&&(a=e(t)),void 0===i&&(i=e(r));for(var d=0,n=t.length;n--;)d+=(t[n]-a)*(r[n]-i);return d/t.length}},687:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.conv2=void 0;var a=e(490),i=e(298),d=e(118),n=e(799);function o(t,r,e){var a=t.data,i=t.width,d=t.height;void 0===e&&(e="full");for(var o=i+r.width-1,h=d+r.height-1,u=n.zeros(h,o).data,f=0;f<r.height;f++)for(var l=0;l<r.width;l++){var w=r.data[f*r.width+l];if(w)for(var s=0;s<d;s++)for(var g=0;g<i;g++)u[(s+f)*o+g+l]+=a[s*i+g]*w}return v({data:u,width:o,height:h},e,d,r.height,i,r.width)}function h(t,r,e){var d=r.data,n=r.width,o=r.height;void 0===e&&(e="full");var h=f(t,i.ones(o,1),i.ones(1,n),e);return a.multiply2d(h,d[0])}function u(t){for(var r=t.data,e=r[0],a=1;a<r.length;a++)if(r[a]!==e)return!1;return!0}function f(t,r,e,a){void 0===a&&(a="full");var i=Math.max(r.height,r.width),d=Math.max(e.height,e.width),n=o(t,r,"full");return v(o(n,e,"full"),a,t.height,i,t.width,d)}function v(t,r,e,a,i,n){if("full"===r)return t;if("same"===r){var o=Math.ceil((t.height-e)/2),h=Math.ceil((t.width-i)/2);return d.sub(t,o,e,h,i)}return d.sub(t,a-1,e-a+1,n-1,i-n+1)}r.conv2=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t[2]&&t[2].data?f.apply(void 0,t):u(t[1])?h.apply(void 0,t):o.apply(void 0,t)}},346:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.filter2=void 0;var a=e(687);r.filter2=function(t,r,e){return void 0===e&&(e="same"),a.conv2(r,function(t){for(var r=t.data,e=t.width,a=t.height,i=new Array(r.length),d=0;d<a;d++)for(var n=0;n<e;n++)i[d*e+n]=r[(a-1-d)*e+e-1-n];return{data:i,width:e,height:a}}(t),e)}},470:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.fspecial=void 0;var a=e(490);r.fspecial=function(t,r,e){void 0===r&&(r=3),void 0===e&&(e=1.5);var i=function(t,r){for(var e=t.data,a=t.width,i=t.height,d=new Array(e.length),n=0;n<e.length;n++)d[n]=Math.exp(-e[n]/(2*Math.pow(r,2)));return{data:d,width:a,height:i}}(function(t){for(var r=2*t+1,e=new Array(Math.pow(r,2)),a=0;a<r;a++)for(var i=0;i<r;i++)e[a*r+i]=Math.pow(a-t,2)+Math.pow(i-t,2);return{data:e,width:r,height:r}}(r=(r-1)/2),e),d=a.sum2d(i);return a.divide2d(i,d)}},521:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.imfilter=void 0;var a=e(20),i=e(389),d=e(490),n=e(346);r.imfilter=function(t,r,e,o){return void 0===e&&(e="symmetric"),void 0===o&&(o="same"),t=function(t,r,e,n){if(t=i.padarray(t,d.floor([r/2,e/2]),n),0===a.mod(r,2)&&(t.data=t.data.slice(0,-t.width),t.height--),0===a.mod(e,2)){for(var o=[],h=0;h<t.data.length;h++)(h+1)%t.width!=0&&o.push(t.data[h]);t.data=o,t.width--}return t}(t,r.width,r.height,e),o=function(t){return"same"===t&&(t="valid"),t}(o),n.filter2(r,t,o)}},971:function(t,r,e){var a=this&&this.__createBinding||(Object.create?function(t,r,e,a){void 0===a&&(a=e),Object.defineProperty(t,a,{enumerable:!0,get:function(){return r[e]}})}:function(t,r,e,a){void 0===a&&(a=e),t[a]=r[e]}),i=this&&this.__exportStar||function(t,r){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(r,e)||a(r,t,e)};Object.defineProperty(r,"__esModule",{value:!0}),i(e(687),r),i(e(346),r),i(e(470),r),i(e(521),r),i(e(150),r),i(e(298),r),i(e(389),r),i(e(582),r),i(e(439),r),i(e(118),r),i(e(240),r),i(e(799),r)},928:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.numbers=void 0,r.numbers=function(t,r,e){for(var a=r*t,i=new Array(a),d=0;d<a;d++)i[d]=e;return{data:i,width:r,height:t}}},20:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.mod=void 0,r.mod=function(t,r){return t-r*Math.floor(t/r)}},150:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.normpdf=void 0,r.normpdf=function(t,r,e){var a=t.data,i=t.width,d=t.height;void 0===r&&(r=0),void 0===e&&(e=1);for(var n=new Array(a.length),o=0;o<a.length;o++){var h=(a[o]-r)/e;n[o]=Math.exp(-Math.pow(h,2)/2)/(2.5066282746310007*e)}return{data:n,width:i,height:d}}},298:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.ones=void 0;var a=e(928);r.ones=function(t,r){return void 0===r&&(r=t),a.numbers(t,r,1)}},389:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.padarray=void 0;var a=e(20);r.padarray=function(t,r,e,i){var d=r[0],n=r[1];return t.height>=d&&t.width>=n?function(t,r){for(var e=r[0],a=r[1],i=t.width+2*a,d=t.height+2*e,n=new Array(i*d),o=-e;o<0;o++){for(var h=-a;h<0;h++)n[(o+e)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)n[(o+e)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+h];for(h=t.width;h<t.width+a;h++)n[(o+e)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+2*t.width-h-1]}for(o=0;o<t.height;o++){for(h=-a;h<0;h++)n[(o+e)*i+h+a]=t.data[o*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)n[(o+e)*i+h+a]=t.data[o*t.width+h];for(h=t.width;h<t.width+a;h++)n[(o+e)*i+h+a]=t.data[o*t.width+2*t.width-h-1]}for(o=t.height;o<t.height+e;o++){for(h=-a;h<0;h++)n[(o+e)*i+h+a]=t.data[(2*t.height-o-1)*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)n[(o+e)*i+h+a]=t.data[(2*t.height-o-1)*t.width+h];for(h=t.width;h<t.width+a;h++)n[(o+e)*i+h+a]=t.data[(2*t.height-o-1)*t.width+2*t.width-h-1]}return{data:n,width:i,height:d}}(t,[d,n]):function(t,r){for(var e=function(t,r){return{data:t.data.concat(r.data),height:t.height+r.height,width:t.width}}(t,function(t){for(var r=t.data,e=t.width,a=t.height,i=new Array(r.length),d=0;d<a;d++)for(var n=0;n<e;n++)i[d*e+n]=r[(a-1-d)*e+n];return{data:i,width:e,height:a}}(t)),i=t.height+2*r,d=new Array(t.width*i),n=-r;n<t.height+r;n++)for(var o=0;o<t.width;o++)d[(n+r)*t.width+o]=e.data[a.mod(n,e.height)*t.width+o];return{data:d,width:t.width,height:i}}(function(t,r){for(var e=t.width+2*r,i=new Array(e*t.height),d=function(t,r){for(var e=t.width+r.width,a=new Array(t.height*e),i=0;i<t.height;i++){for(var d=0;d<t.width;d++)a[i*e+d]=t.data[i*t.width+d];for(d=0;d<r.width;d++)a[i*e+d+t.width]=r.data[i*r.width+d]}return{data:a,width:e,height:t.height}}(t,function(t){for(var r=t.data,e=t.width,a=t.height,i=new Array(r.length),d=0;d<a;d++)for(var n=0;n<e;n++)i[d*e+n]=r[d*e+e-1-n];return{data:i,width:e,height:a}}(t)),n=0;n<t.height;n++)for(var o=-r;o<t.width+r;o++)i[n*e+o+r]=d.data[n*d.width+a.mod(o,d.width)];return{data:i,width:e,height:t.height}}(t,n),d)}},582:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.rgb2grayInteger=r.rgb2gray=void 0,r.rgb2gray=function(t){for(var r=t.data,e=t.width,a=t.height,i=new Uint8Array(e*a),d=0;d<r.length;d+=4)i[d/4]=.29894*r[d]+.58704*r[d+1]+.11402*r[d+2]+.5;return{data:Array.from(i),width:e,height:a}},r.rgb2grayInteger=function(t){for(var r=t.data,e=t.width,a=t.height,i=new Array(e*a),d=0;d<r.length;d+=4)i[d/4]=77*r[d]+150*r[d+1]+29*r[d+2]+128>>8;return{data:i,width:e,height:a}}},439:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.skip2d=void 0,r.skip2d=function(t,r,e){for(var a=r[0],i=r[1],d=r[2],n=e[0],o=e[1],h=e[2],u=Math.ceil((h-n)/o),f=Math.ceil((d-a)/i),v=new Array(u*f),l=0;l<f;l++)for(var w=0;w<u;w++){var s=a+l*i,g=n+w*o;v[l*u+w]=t.data[s*t.width+g]}return{data:v,width:u,height:f}}},118:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.sub=void 0,r.sub=function(t,r,e,a,i){for(var d=t.data,n=t.width,o=new Array(i*e),h=0;h<e;h++)for(var u=0;u<i;u++)o[h*i+u]=d[(a+h)*n+r+u];return{data:o,width:i,height:e}}},240:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.transpose=void 0,r.transpose=function(t){for(var r=t.data,e=t.width,a=t.height,i=new Array(e*a),d=0;d<a;d++)for(var n=0;n<e;n++)i[n*a+d]=r[d*e+n];return{data:i,height:e,width:a}}},799:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.zeros=void 0;var a=e(928);r.zeros=function(t,r){return void 0===r&&(r=t),a.numbers(t,r,0)}},595:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.originalSsim=void 0;var a=e(490),i=e(971);r.originalSsim=function(t,r,e){var d=i.fspecial("gaussian",e.windowSize,1.5),n=Math.pow(2,e.bitDepth)-1,o=Math.pow(e.k1*n,2),h=Math.pow(e.k2*n,2);d=a.divide2d(d,a.sum2d(d));var u=i.filter2(d,t,"valid"),f=i.filter2(d,r,"valid"),v=a.square2d(u),l=a.square2d(f),w=a.multiply2d(u,f),s=a.square2d(t),g=a.square2d(r),c=a.subtract2d(i.filter2(d,s,"valid"),v),p=a.subtract2d(i.filter2(d,g,"valid"),l),m=a.subtract2d(i.filter2(d,a.multiply2d(t,r),"valid"),w);if(o>0&&h>0){var y=a.add2d(a.multiply2d(w,2),o),b=a.add2d(a.multiply2d(m,2),h),M=a.add2d(a.add2d(v,l),o),_=a.add2d(a.add2d(c,p),h);return a.divide2d(a.multiply2d(y,b),a.multiply2d(M,_))}var O=a.multiply2d(w,2),j=a.multiply2d(m,2),A=a.add2d(v,l),k=a.add2d(c,p);return a.divide2d(a.multiply2d(O,j),a.multiply2d(A,k))}},773:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.ssim=void 0;var a=e(490),i=e(971);r.ssim=function(t,r,e){var d=i.normpdf(function(t){for(var r=Math.floor(t/2),e=new Array(2*r+1),a=-r;a<=r;a++)e[a+r]=Math.abs(a);return{data:e,width:e.length,height:1}}(e.windowSize),0,1.5),n=Math.pow(2,e.bitDepth)-1,o=Math.pow(e.k1*n,2),h=Math.pow(e.k2*n,2);d=a.divide2d(d,a.sum2d(d));var u=i.transpose(d),f=i.conv2(t,d,u,"valid"),v=i.conv2(r,d,u,"valid"),l=a.square2d(f),w=a.square2d(v),s=a.multiply2d(f,v),g=a.square2d(t),c=a.square2d(r),p=a.subtract2d(i.conv2(g,d,u,"valid"),l),m=a.subtract2d(i.conv2(c,d,u,"valid"),w),y=a.subtract2d(i.conv2(a.multiply2d(t,r),d,u,"valid"),s);return o>0&&h>0?function(t,r,e,i,d,n,o,h){var u=a.add2d(a.multiply2d(t,2),o),f=a.add2d(a.multiply2d(r,2),h),v=a.add2d(a.add2d(e,i),o),l=a.add2d(a.add2d(d,n),h);return a.divide2d(a.multiply2d(u,f),a.multiply2d(v,l))}(s,y,l,w,p,m,o,h):function(t,r,e,i,d,n){var o=a.multiply2d(t,2),h=a.multiply2d(r,2),u=a.add2d(e,i),f=a.add2d(d,n);return a.divide2d(a.multiply2d(o,h),a.multiply2d(u,f))}(s,y,l,w,p,m)}},535:function(t,r){var e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t}).apply(this,arguments)};function a(t,r,e,a){return{rightEdge:e[r*a+t+1],bottomEdge:e[(r+1)*a+t],bottomRightEdge:e[(r+1)*a+t+1]}}function i(t,r){for(var e=t.width,i=t.height,d=t.data,n=e+1,o=i+1,h=new Int32Array(n*o),u=i-1;u>=0;--u)for(var f=e-1;f>=0;--f){var v=a(f,u,h,n),l=v.rightEdge,w=v.bottomEdge,s=v.bottomRightEdge;h[u*n+f]=r(d[u*e+f],f,u)+l+w-s}return{data:h,height:o,width:n}}function d(t,r,e){for(var i=t.width,d=t.height,n=t.data,o=r.data,h=i+1,u=d+1,f=new Int32Array(h*u),v=d-1;v>=0;--v)for(var l=i-1;l>=0;--l){var w=a(l,v,f,h),s=w.rightEdge,g=w.bottomEdge,c=w.bottomRightEdge,p=v*i+l;f[v*h+l]=e(n[p],o[p],l,v)+s+g-c}return{data:f,height:u,width:h}}function n(t,r,e){for(var a=t.width,i=t.height,d=t.data,n=a-1,o=i-1,h=n-r+1,u=o-r+1,f=new Int32Array(h*u),v=0;v<o;++v)for(var l=0;l<n;++l)if(l<h&&v<u){var w=d[a*v+l]-d[a*v+l+r]-d[a*(v+r)+l]+d[a*(v+r)+l+r];f[v*h+l]=w/e}return{height:u,width:h,data:f}}function o(t,r){return n(i(t,(function(t){return t})),r,1)}function h(t,r,e){for(var a=e*e,d=n(i(t,(function(t){return t*t})),e,1),o=0;o<r.data.length;++o){var h=r.data[o]/a,u=d.data[o]/a,f=h*h;d.data[o]=1024*(u-f)}return d}function u(t,r,e,a,i){for(var o=i*i,h=n(d(t,r,(function(t,r){return t*r})),i,1),u=0;u<e.data.length;++u)h.data[u]=1024*(h.data[u]/o-e.data[u]/o*(a.data[u]/o));return h}Object.defineProperty(r,"__esModule",{value:!0}),r.weberSsim=r.windowCovariance=r.windowVariance=r.windowSums=r.windowMatrix=r.partialSumMatrix2=r.partialSumMatrix1=void 0,r.partialSumMatrix1=i,r.partialSumMatrix2=d,r.windowMatrix=n,r.windowSums=o,r.windowVariance=h,r.windowCovariance=u,r.weberSsim=function(t,r,a){for(var i=a.bitDepth,d=a.k1,n=a.k2,f=a.windowSize,v=Math.pow(2,i)-1,l=d*v*(d*v),w=n*v*(n*v),s=f*f,g=e(e({},t),{data:Int32Array.from(t.data,(function(t){return t+.5}))}),c=e(e({},r),{data:Int32Array.from(r.data,(function(t){return t+.5}))}),p=o(g,f),m=h(g,p,f),y=o(c,f),b=h(c,y,f),M=u(g,c,p,y,f),_=p.data.length,O=0,j=new Array(_),A=0;A<_;++A){var k=p.data[A]/s,P=y.data[A]/s,S=m.data[A]/1024,x=b.data[A]/1024,E=(2*k*P+l)*(M.data[A]/1024*2+w)/(k*k+P*P+l)/(S+x+w);j[A]=E,0==A?O=E:O+=(E-O)/(A+1)}return{data:j,width:p.width,height:p.height,mssim:O}}}},r={};return function e(a){if(r[a])return r[a].exports;var i=r[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}(607)})()}));
//# sourceMappingURL=ssim.web.js.map