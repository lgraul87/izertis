import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShipsService } from './ships.service';
import {describe, expect, test} from '@jest/globals';

import 'zone.js';
import 'zone.js/testing';

describe('ShipsService', () => {
  let service: ShipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ShipsService);
  });

  // test('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
