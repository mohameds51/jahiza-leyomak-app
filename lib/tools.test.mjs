import assert from 'node:assert/strict';
import {careSuggestions,careStats,dueOn,bagSuggestions,bagStats} from './tools.ts';
assert.equal(dueOn(careSuggestions[0],'2026-11-14'),true);
assert.equal(dueOn({...careSuggestions[0],active:false},'2026-11-14'),false);
assert.equal(dueOn(careSuggestions[0],'2026-02-30'),false);
assert.deepEqual(careStats([careSuggestions[0]],[{routineId:careSuggestions[0].id,date:'2026-11-14'}],'2026-11-14'),{due:1,done:1});
assert.deepEqual(bagStats(bagSuggestions),{total:5,done:0});
assert.deepEqual(bagStats([{...bagSuggestions[0],packed:true}]),{total:1,done:1});
console.log('Special tools logic: 6 tests passed');
