const mem = document.querySelector('.mem')
const atual = document.querySelector('.atual')
const n0 = document.querySelector('#n0')
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const n3 = document.querySelector('#n3')
const n4 = document.querySelector('#n4')
const n5 = document.querySelector('#n5')
const n6 = document.querySelector('#n6')
const n7 = document.querySelector('#n7')
const n8 = document.querySelector('#n8')
const n9 = document.querySelector('#n9')
const cl = document.querySelector('#cl')
const res = document.querySelector('#res')
const div = document.querySelector('#div')
const mult = document.querySelector('#mult')
const sub = document.querySelector('#sub')
const soma = document.querySelector('#soma')
var v1, op, v2, res_temp, cal

cl.addEventListener('click', () => {
    v1 = null
    op = null
    v2 = null
    mem.innerHTML = ''
    atual.innerHTML = '0'
})

res.addEventListener('click', () => {
    if(op == null && v1 != null) {
        mem.innerHTML = v1
        atual.innerHTML = v1
        v1 = null
    } else if(op != null) {
        if(v2 == null) {
            v2 = 0
        }
        switch(op) {
            case 'SOMA':
                res_temp = Number(v1) + Number(v2)
                if(String(res_temp).length < 14) {
                    mem.innerHTML = ''
                    atual.innerHTML = res_temp
                } else {
                    mem.innerHTML = res_temp
                    atual.innerHTML = 'RESULTADO ▲'
                }
            break;
            case 'SUB':
                res_temp = Number(v1) - Number(v2)
                if(String(res_temp).length < 14) {
                    mem.innerHTML = ''
                    atual.innerHTML = res_temp
                } else {
                    mem.innerHTML = res_temp
                    atual.innerHTML = 'RESULTADO ▲'
                }
            break;
            case 'MULT':
                res_temp = Number(v1) * Number(v2)
                if(String(res_temp).length < 14) {
                    mem.innerHTML = ''
                    atual.innerHTML = res_temp
                } else {
                    mem.innerHTML = res_temp
                    atual.innerHTML = 'RESULTADO ▲'
                }
            break;
            case 'DIV':
                res_temp = Number(v1) / Number(v2)
                if(String(res_temp).length < 14) {
                    mem.innerHTML = ''
                    atual.innerHTML = res_temp
                } else {
                    mem.innerHTML = res_temp
                    atual.innerHTML = 'RESULTADO ▲'
                }
            break;
        }
        v1 = res_temp
        op = null
        v2 = null
        cal = 1
    } else {
        mem.innerHTML = ''
        atual.innerHTML = 'ERRO'
    }
})

n0.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            atual.innerHTML = '0'
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 0
                atual.innerHTML = v1
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            atual.innerHTML = '0'
        }
    } else {
        if(v2 == null) {
            atual.innerHTML = '0'
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 0
                atual.innerHTML = v2
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            atual.innerHTML = '0'
        }
    }
})

n1.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 1
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 1
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 1
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 1
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 1
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 1
        }
        atual.innerHTML = v2
    }
})

n2.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 2
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 2
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 2
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 2
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 2
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 2
        }
        atual.innerHTML = v2
    }
})

n3.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 3
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 3
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 3
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 3
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 3
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 3
        }
        atual.innerHTML = v2
    }
})

n4.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 4
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 4
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 4
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 4
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 4
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 4
        }
        atual.innerHTML = v2
    }
})

n5.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 5
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 5
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 5
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 5
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 5
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 5
        }
        atual.innerHTML = v2
    }
})

n6.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 6
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 6
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 6
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 6
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 6
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 6
        }
        atual.innerHTML = v2
    }
})

n7.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 7
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 7
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 7
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 7
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 7
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 7
        }
        atual.innerHTML = v2
    }
})

n8.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 8
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 8
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 8
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 8
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 8
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 8
        }
        atual.innerHTML = v2
    }
})

n9.addEventListener('click', () => {
    if(op == null) {
        mem.innerHTML = ''
        if(v1 == null) {
            v1 = 9
        } else if(cal != 1) {
            if(String(v1).length < 14) {
                v1 = String(v1) + 9
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v1 = 9
        }
        atual.innerHTML = v1
    } else {
        if(v2 == null) {
            v2 = 9
        } else if(cal != 1) {
            if(String(v2).length < 14) {
                v2 = String(v2) + 9
            } else {
                alert('Limite Máximo Atingido!')
            }
        } else {
            cal = 0
            v2 = 9
        }
        atual.innerHTML = v2
    }
})

soma.addEventListener('click', () => {
    op = 'SOMA'
    if(v1 == null) {
        v1 = 0
        mem.innerHTML = `${v1}  + `
        atual.innerHTML = '0'
    } else if(v1 != null && v2 == null) {
        mem.innerHTML = `${v1}  + `
        atual.innerHTML = '0'
    } else {
        mem.innerHTML = `${Number(v1) + Number(v2)}  + `
        v1 = Number(v1) + Number(v2)
        v2 = null
        atual.innerHTML = '0'
    }
})

sub.addEventListener('click', () => {
    op = 'SUB'
    if(v1 == null) {
        v1 = 0
        mem.innerHTML = `${v1}  - `
        atual.innerHTML = '0'
    } else if(v1 != null && v2 == null) {
        mem.innerHTML = `${v1}  - `
        atual.innerHTML = '0'
    } else {
        mem.innerHTML = `${Number(v1) - Number(v2)}  - `
        v1 = Number(v1) - Number(v2)
        v2 = null
        atual.innerHTML = '0'
    }
})

mult.addEventListener('click', () => {
    op = 'MULT'
    if(v1 == null) {
        v1 = 0
        mem.innerHTML = `${v1}  * `
        atual.innerHTML = '0'
    } else if(v1 != null && v2 == null) {
        mem.innerHTML = `${v1}  * `
        atual.innerHTML = '0'
    } else {
        mem.innerHTML = `${Number(v1) * Number(v2)}  * `
        v1 = Number(v1) * Number(v2)
        v2 = null
        atual.innerHTML = '0'
    }
})

div.addEventListener('click', () => {
    op = 'DIV'
    if(v1 == null) {
        v1 = 0
        mem.innerHTML = `${v1}  / `
        atual.innerHTML = '0'
    } else if(v1 != null && v2 == null) {
        mem.innerHTML = `${v1}  / `
        atual.innerHTML = '0'
    } else {
        mem.innerHTML = `${Number(v1) / Number(v2)}  / `
        v1 = Number(v1) / Number(v2)
        v2 = null
        atual.innerHTML = '0'
    }
})