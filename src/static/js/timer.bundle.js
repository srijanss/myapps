!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"startTimer",(function(){return o}));const n=(e,t,r)=>(e.innerHTML=t-r==0&&10===t?"Rest":t-r==0&&3===t?"Work":t-r,r+=1),o=(e,t,r,o)=>{const u=document.querySelector("#number-of-sets");u.innerHTML=t;const l=document.querySelector(".main-content");return setInterval(()=>{r<=10?(l.style.backgroundColor="yellowgreen",(r=n(e,10,r))>10&&(t+=1,u.innerHTML=t)):(l.style.backgroundColor="tomato",o<=3?o=n(e,3,o):(r=0,o=0,l.style.backgroundColor="yellowgreen",r=n(e,10,r)))},1e3)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi90aW1lci5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInVwZGF0ZUNvdW50ZXIiLCJ0aW1lcmJsb2NrIiwic3RhcnRUaW1lIiwiY291bnRlciIsImlubmVySFRNTCIsInN0YXJ0VGltZXIiLCJzZXRDb3VudCIsIndvcmtDb3VudGVyIiwicmVzdENvdW50ZXIiLCJzZXRDb3VudGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbkNvbnRlbnQiLCJzZXRJbnRlcnZhbCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGlGQ2pGckQsTUFBTUMsRUFBZ0IsQ0FBQ0MsRUFBWUMsRUFBV0MsS0FFMUNGLEVBQVdHLFVBRFRGLEVBQVlDLEdBQVksR0FBbUIsS0FBZEQsRUFDUixPQUNkQSxFQUFZQyxHQUFZLEdBQW1CLElBQWRELEVBQ2YsT0FFQUEsRUFBWUMsRUFFckNBLEdBQVcsR0FJQUUsRUFBYSxDQUFDSixFQUFZSyxFQUFVQyxFQUFhQyxLQUM1RCxNQUFNQyxFQUFhQyxTQUFTQyxjQUFjLG1CQUMxQ0YsRUFBV0wsVUFBWUUsRUFHdkIsTUFBTU0sRUFBY0YsU0FBU0MsY0FBYyxpQkFzQjNDLE9BcEJvQkUsWUFBWSxLQUMxQk4sR0FMaUIsSUFNbkJLLEVBQVlFLE1BQU1DLGdCQUFrQixlQUNwQ1IsRUFBY1AsRUFBY0MsRUFQVCxHQU91Q00sSUFQdkMsS0FTakJELEdBQVksRUFDWkcsRUFBV0wsVUFBWUUsS0FHekJNLEVBQVlFLE1BQU1DLGdCQUFrQixTQUNoQ1AsR0FiWSxFQWNkQSxFQUFjUixFQUFjQyxFQWRkLEVBY3lDTyxJQUV2REQsRUFBYyxFQUNkQyxFQUFjLEVBQ2RJLEVBQVlFLE1BQU1DLGdCQUFrQixjQUNwQ1IsRUFBY1AsRUFBY0MsRUFwQlgsR0FvQnlDTSxNQUc3RCIsImZpbGUiOiJ0aW1lci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuY29uc3QgdXBkYXRlQ291bnRlciA9ICh0aW1lcmJsb2NrLCBzdGFydFRpbWUsIGNvdW50ZXIpID0+IHtcclxuICBpZiAoc3RhcnRUaW1lIC0gY291bnRlciA9PT0gMCAmJiBzdGFydFRpbWUgPT09IDEwKSB7XHJcbiAgICB0aW1lcmJsb2NrLmlubmVySFRNTCA9ICdSZXN0J1xyXG4gIH0gZWxzZSBpZiAoc3RhcnRUaW1lIC0gY291bnRlciA9PT0gMCAmJiBzdGFydFRpbWUgPT09IDMpIHtcclxuICAgIHRpbWVyYmxvY2suaW5uZXJIVE1MID0gJ1dvcmsnXHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWVyYmxvY2suaW5uZXJIVE1MID0gc3RhcnRUaW1lIC0gY291bnRlclxyXG4gIH1cclxuICBjb3VudGVyICs9IDFcclxuICByZXR1cm4gY291bnRlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRUaW1lciA9ICh0aW1lcmJsb2NrLCBzZXRDb3VudCwgd29ya0NvdW50ZXIsIHJlc3RDb3VudGVyKSA9PiB7XHJcbiAgY29uc3Qgc2V0Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItb2Ytc2V0cycpXHJcbiAgc2V0Q291bnRlci5pbm5lckhUTUwgPSBzZXRDb3VudFxyXG4gIGxldCB3b3Jrb3V0U3RhcnRUaW1lID0gMTBcclxuICBsZXQgcmVzdFN0YXJ0VGltZSA9IDNcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxyXG5cclxuICBsZXQgaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmICh3b3JrQ291bnRlciA8PSB3b3Jrb3V0U3RhcnRUaW1lKSB7XHJcbiAgICAgIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3dncmVlbidcclxuICAgICAgd29ya0NvdW50ZXIgPSB1cGRhdGVDb3VudGVyKHRpbWVyYmxvY2ssIHdvcmtvdXRTdGFydFRpbWUsIHdvcmtDb3VudGVyKVxyXG4gICAgICBpZiAod29ya0NvdW50ZXIgPiB3b3Jrb3V0U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgc2V0Q291bnQgKz0gMVxyXG4gICAgICAgIHNldENvdW50ZXIuaW5uZXJIVE1MID0gc2V0Q291bnRcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RvbWF0bydcclxuICAgICAgaWYgKHJlc3RDb3VudGVyIDw9IHJlc3RTdGFydFRpbWUpIHtcclxuICAgICAgICByZXN0Q291bnRlciA9IHVwZGF0ZUNvdW50ZXIodGltZXJibG9jaywgcmVzdFN0YXJ0VGltZSwgcmVzdENvdW50ZXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd29ya0NvdW50ZXIgPSAwXHJcbiAgICAgICAgcmVzdENvdW50ZXIgPSAwXHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvd2dyZWVuJ1xyXG4gICAgICAgIHdvcmtDb3VudGVyID0gdXBkYXRlQ291bnRlcih0aW1lcmJsb2NrLCB3b3Jrb3V0U3RhcnRUaW1lLCB3b3JrQ291bnRlcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIDEwMDApXHJcbiAgcmV0dXJuIGludGVydmFsVGltZXJcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9