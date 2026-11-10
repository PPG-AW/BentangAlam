import {test,expect} from '@playwright/test';
test('klik bersuara, musik saat bermain, berhenti ketika jeda atau dibisukan',async({page})=>{
 await page.addInitScript(()=>{const original=AudioContext.prototype.createOscillator;AudioContext.prototype.createOscillator=function(){document.documentElement.dataset.audioNotes=String(Number(document.documentElement.dataset.audioNotes??0)+1);return original.call(this);};});
 await page.goto('/');await page.getByRole('button',{name:/Mulai battle/}).click();
 const count=async()=>Number(await page.locator('html').getAttribute('data-audio-notes'));
 expect(await count()).toBeGreaterThan(0);
 await page.getByRole('checkbox',{name:/Mode aksesibilitas 2D/}).check();await page.getByRole('button',{name:'Masuk arena'}).click();const before=await count();await expect.poll(count).toBeGreaterThan(before);
 await page.getByRole('button',{name:'Jeda kedua pemain'}).click();await page.waitForTimeout(350);const paused=await count();await page.waitForTimeout(1000);expect(await count()).toBe(paused);
 await page.getByRole('button',{name:'Lanjutkan',exact:true}).click();const resumed=await count();await expect.poll(count).toBeGreaterThan(resumed);
 await page.getByRole('button',{name:'Suara',exact:true}).click();await expect(page.getByRole('button',{name:'Suara',exact:true})).toHaveAttribute('aria-pressed','false');await page.waitForTimeout(350);const muted=await count();await page.waitForTimeout(1000);expect(await count()).toBe(muted);
 await page.getByRole('button',{name:'Suara',exact:true}).click();await expect(page.getByRole('button',{name:'Suara',exact:true})).toHaveAttribute('aria-pressed','true');await expect.poll(count).toBeGreaterThan(muted);
});
