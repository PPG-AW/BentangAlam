// Original procedural instrumental: no network, recordings, or licensed music assets.
export class GameAudio {
 private context:AudioContext|null=null;
 private effects:GainNode|null=null;
 private music:GainNode|null=null;
 private timer:ReturnType<typeof setInterval>|null=null;
 private muted=false;
 private playing=false;
 private next=0;
 private step=0;
 private notes=new Set<OscillatorNode>();
 unlock(){try{if(!this.context){const a=new AudioContext();this.context=a;this.effects=a.createGain();this.effects.gain.value=.12;this.effects.connect(a.destination);this.music=a.createGain();this.music.gain.value=.075;this.music.connect(a.destination);}void this.context.resume().catch(()=>{});this.schedule();}catch{/* Audio unavailable: gameplay remains usable. */}}
 configure(muted:boolean,playing:boolean){this.muted=muted;this.playing=playing;const a=this.context;if(a&&this.effects)this.effects.gain.setValueAtTime(muted?0:.12,a.currentTime);if(a&&this.music)this.music.gain.setValueAtTime(muted||!playing?0:.075,a.currentTime);if(muted||!playing)this.stopMusic();else this.schedule();}
 private tone(frequency:number,time:number,duration:number,volume:number,type:OscillatorType,bus:GainNode,musical=false){const a=this.context;if(!a)return;const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(frequency,time);g.gain.setValueAtTime(.0001,time);g.gain.exponentialRampToValueAtTime(volume,time+.012);g.gain.exponentialRampToValueAtTime(.0001,time+duration);o.connect(g);g.connect(bus);if(musical)this.notes.add(o);o.onended=()=>{this.notes.delete(o);o.disconnect();g.disconnect();};o.start(time);o.stop(time+duration+.02);}
 click(){if(this.muted)return;this.unlock();const a=this.context;if(!a||!this.effects)return;this.tone(740,a.currentTime,.055,.3,'sine',this.effects);this.tone(1100,a.currentTime+.025,.065,.16,'sine',this.effects);}
 answer(correct:boolean){if(this.muted)return;this.unlock();const a=this.context;if(!a||!this.effects)return;const melody=correct?[523.25,659.25,783.99]:[293.66,220];melody.forEach((hz,i)=>this.tone(hz,a.currentTime+i*.09,.22,.36,'triangle',this.effects!));}
 private schedule(){if(this.timer||this.muted||!this.playing||!this.context||!this.music)return;this.next=this.context.currentTime+.06;this.step=0;const tick=()=>{const a=this.context,bus=this.music;if(!a||!bus)return;if(this.next<a.currentTime-.2)this.next=a.currentTime+.05;while(this.next<a.currentTime+.18){const s=this.step%32;const melody=[64,67,69,67,72,69,67,62,64,67,69,74,72,69,67,62,60,64,67,69,67,64,62,64,62,67,69,67,64,62,60,62];const hz=(m:number)=>440*Math.pow(2,(m-69)/12);if(s%2===0)this.tone(hz(melody[s]),this.next,.44,.27,'sine',bus,true);if(s%4===0){const bass=[48,45,53,55][Math.floor(s/8)];this.tone(hz(bass),this.next,.65,.26,'triangle',bus,true);this.tone(hz(bass+19),this.next,.85,.09,'sine',bus,true);}this.next+=60/92/2;this.step++;}};tick();this.timer=setInterval(tick,80);}
 private stopMusic(){if(this.timer){clearInterval(this.timer);this.timer=null;}for(const o of this.notes){try{o.stop();}catch{}}this.notes.clear();}
 dispose(){this.stopMusic();if(this.context)void this.context.close().catch(()=>{});this.context=null;}
}
