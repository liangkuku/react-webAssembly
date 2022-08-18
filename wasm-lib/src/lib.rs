use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

// lifted from the `console_log` example
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
#[derive(Debug, Serialize, Deserialize)]
pub struct Block {
    id: String,
    label: String,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct Data {
    blocks: Vec<Block>,
}

#[wasm_bindgen]
pub fn getData() -> JsValue {
    let res = Data {
        blocks: vec![
            Block {
                id: '1'.to_string(),
                label: "作战单位1".to_string(),
            },
            Block {
                id: '2'.to_string(),
                label: "作战单位2".to_string(),
            },
            Block {
                id: '3'.to_string(),
                label: "作战单位3".to_string(),
            },
        ],
    };
    JsValue::from_serde(&res).unwrap()
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Counter {
    key: char,
    count: i32,
}
#[wasm_bindgen]
impl Counter {
    pub fn default() -> Counter {
        log("Counter::default");
        Self::new('a', 0)
    }
    pub fn new(key: char, count: i32) -> Counter {
        log(&format!("Counter::new({}, {})", key, count));
        Counter {
            key: key,
            count: count,
        }
    }

    pub fn key(&self) -> char {
        log("Counter.key()");
        self.key
    }

    pub fn count(&self) -> i32 {
        log("Counter.count");
        self.count
    }

    pub fn increment(&mut self) {
        log("Counter.increment");
        self.count += 1;
    }

    pub fn update_key(&mut self, key: char) {
        self.key = key;
    }
}
