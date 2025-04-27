// server/src/app.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Very small demo controller:
 *   • GET /api/games/:id  → returns the JSON game definition
 *   • Throws 404 JSON if the file is missing
 *
 * └─ Expected folder layout while running `npm run start:dev`
 *    server/
 *      └─ src/
 *          ├─ app.controller.ts   ← (this file)
 *          └─ games/
 *              └─ party_legends_v1.json
 */
@Controller('api')
export class AppController {
  @Get('games/:id')
  getGame(@Param('id') id: string) {
    // Resolve path relative to compiled source (`dist` in prod, `src` in dev)
    const file = join(__dirname, '..', 'src', 'games', `${id}.json`);

    console.log(file);
    if (!existsSync(file)) {
      throw new NotFoundException(`Game ${id} not found`);
    }

    return JSON.parse(readFileSync(file, 'utf8'));
  }
}
