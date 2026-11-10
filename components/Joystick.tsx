'use client';
import {useEffect,useRef,useState} from 'react';
export default function Joystick({side,disabled,onMove}:{side:number;disabled:boolean;onMove:(side:number,x:number,z:number)=>void}){
 const active=useRef<number|null>(null);const [knob,setKnob]=useState({x:0,y:0});
 const callback=useRef(onMove);useEffect(()=>{callback.current=onMove;},[onMove]);
 useEffect(()=>{if(disabled){active.current=null;callback.current(side,0,0);}},[disabled,side]);
 useEffect(()=>()=>callback.current(side,0,0),[side]);
 function release(){active.current=null;setKnob({x:0,y:0});onMove(side,0,0);}
 return <div className={'joystick '+(disabled?'disabled':'')} role="group" aria-label={`Joystick pemain ${side+1}`} data-active={!disabled&&(knob.x!==0||knob.y!==0)} style={{touchAction:'none'}}
 onPointerDown={e=>{e.preventDefault();e.stopPropagation();if(disabled||active.current!==null)return;active.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);const r=e.currentTarget.getBoundingClientRect();const dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2;const scale=Math.min(1,42/Math.max(1,Math.hypot(dx,dy)));setKnob({x:dx*scale,y:dy*scale});onMove(side,Math.hypot(dx,dy)<8?0:dx*scale/42,Math.hypot(dx,dy)<8?0:dy*scale/42);}}
 onPointerMove={e=>{e.stopPropagation();if(disabled||active.current!==e.pointerId)return;const r=e.currentTarget.getBoundingClientRect();const dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2;const scale=Math.min(1,42/Math.max(1,Math.hypot(dx,dy)));setKnob({x:dx*scale,y:dy*scale});onMove(side,Math.hypot(dx,dy)<8?0:dx*scale/42,Math.hypot(dx,dy)<8?0:dy*scale/42);}}
 onPointerUp={e=>{e.stopPropagation();if(active.current===e.pointerId)release();}} onPointerCancel={e=>{e.stopPropagation();if(active.current===e.pointerId)release();}} onLostPointerCapture={e=>{if(active.current===e.pointerId)release();}}>
 <span className="joystick-axis vertical"/><span className="joystick-axis horizontal"/><span className="joystick-tip north">↑</span><span className="joystick-tip south">↓</span><span className="joystick-tip west">←</span><span className="joystick-tip east">→</span><span className="joystick-knob" style={{transform:`translate(${disabled?0:knob.x}px,${disabled?0:knob.y}px)`}}><span/></span>
 </div>;
}
