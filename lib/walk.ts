export const TILE_SPACING=36;
export const STAGE_EDGE=25;
export const ANSWER_HALF=4.2;
export const WALK_SPEED=5.5;
export const FOOT_HEIGHT=.3;
export const WALLS=[
 {id:'north',x:0,z:-6,w:15,d:1.1,h:3.3},
 {id:'south',x:0,z:6,w:15,d:1.1,h:3.3},
 {id:'west',x:-8,z:0,w:1.1,d:6.8,h:3.3},
 {id:'east',x:8,z:0,w:1.1,d:6.8,h:3.3},
 {id:'north-east',x:14,z:-11,w:1.1,d:7,h:3.3},
 {id:'south-west',x:-14,z:11,w:1.1,d:7,h:3.3}
];
export const TREES=[{x:-11,z:-11,r:.85},{x:11,z:11,r:.85},{x:4,z:-14,r:.85},{x:-4,z:14,r:.85},{x:-19,z:-7,r:.85},{x:19,z:7,r:.85},{x:-11,z:3,r:.85},{x:11,z:-3,r:.85}];
export const WEBS=[{x:-10,z:-5,r:2.4},{x:10,z:5,r:2.4},{x:-6,z:11,r:2.4},{x:6,z:-11,r:2.4}];
export function cellCenter(cell:number){return {x:(cell%2-.5)*TILE_SPACING,z:(Math.floor(cell/2)-.5)*TILE_SPACING};}
export function worldCell(x:number,z:number){for(let i=0;i<4;i++){const c=cellCenter(i);if(Math.abs(x-c.x)<=ANSWER_HALF&&Math.abs(z-c.z)<=ANSWER_HALF)return i;}return -1;}
export function inWeb(x:number,z:number){return WEBS.some(w=>Math.hypot(x-w.x,z-w.z)<w.r);}
export function blocked(x:number,z:number){const radius=.48;return WALLS.some(w=>Math.abs(x-w.x)<w.w/2+radius&&Math.abs(z-w.z)<w.d/2+radius)||TREES.some(t=>Math.hypot(x-t.x,z-t.z)<t.r+radius);}
export function walkStep(x:number,z:number,dx:number,dz:number,yaw:number,dt:number){const length=Math.hypot(dx,dz);if(!length)return {x,z};const step=WALK_SPEED*Math.min(dt,.05)*(inWeb(x,z)?.3:1)/Math.max(1,length);const vx=(dx*Math.cos(yaw)+dz*Math.sin(yaw))*step;const vz=(-dx*Math.sin(yaw)+dz*Math.cos(yaw))*step;const bound=STAGE_EDGE-.6;const nx=Math.max(-bound,Math.min(bound,x+vx)),nz=Math.max(-bound,Math.min(bound,z+vz));const result={x,z};if(!blocked(nx,z))result.x=nx;if(!blocked(result.x,nz))result.z=nz;return result;}
