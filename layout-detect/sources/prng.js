// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var g_default_prng = null;

function set_global_prng_seed(seed) {
  g_default_prng = new PRNG(seed);
}

// Pseudo Random Number Generator.
// Uses a recursive formula x[n] = (a * x[n - 1] + b) % m with x[0] = seed.
function PRNG(seed, a, b, m) {
  if (!seed)
    seed = 0;

  if (!a) {
    a = 13;
    b = 961748941 /* some prime */;
    m = 1e9 + 9 /* some nice prime */;
  }

  this.seed = () => {return seed; };

  let current = seed;

  this.nextInt = () => {
    current = (a * current + b) % m;
    return current;
  };

  this.getMaxInteger = () => {
    return m;
  };
  let dummy = this.nextInt();
}

PRNG.prototype.rand = function() {
  return this.nextInt() / this.getMaxInteger();
};

PRNG.prototype.randInt = function(a, b) {
  if (a > b) return this.randInt(b, a);
  return a + Math.floor((b - a) * this.rand());
};

// The default global.
g_default_prng = new PRNG(0);

// Tosses an unbalanced coin. Heads occurs with probability |p|.
function CoinToss(p, seed) {
  var rng = !!seed ? new PRNG(seed) : g_default_prng;
  this.Heads = {toString: () => { return "heads"; }};
  this.Tails = {toString: () => {return "tails"; }};
  p = Math.min(1.0, Math.max(0, p));

  this.toss = function() {
    return rng.rand() < p ? this.Heads : this.Tails;
  }
}

// Randomly select a subarray of the array. Each index might get selected
// independently from others WP "p".
function random_subarray(array, p, seed) {
  let coint_toss = new CoinToss(p, seed);
  var new_arr = [];
  for (var index = 0; index < array.length; ++index) {
    if (coint_toss.toss() === coint_toss.Heads) {
      new_arr.push(array[index]);
    }
  }
  return new_arr;
}
