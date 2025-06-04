export default function(global){
    var Boolean = global.Boolean
    Boolean.prototype.ifTrue=function(call){
        return this ? call() : void 0
    }
    Boolean.prototype.ifFalse=function(call){
        return this ? void 0:call();
    }
    Boolean.prototype.ifTrueFalse=function(t,f){
        return this ? t() : f()
    }
    Boolean.prototype.ifFalseTrue=function(t,f){
        return this ? f() : t()
    }
}