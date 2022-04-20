class Vec3
{
    constructor(x,y,z)
    {
	this.x = x;
	this.y = y;
	this.z = z;
    }
}

Vec3.prototype.add = function( v )
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sub = function( v )
{
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    //return Math.min( this.x, this.y, this.z );
    const m =  this.x < this.y ? this.x : this.y;
    return m < this.z ? m : this.z;
}

Vec3.prototype.max = function()
{
    //return Math.max( this.x, this.y, this.z );
    const m = this.x > this.y ? this.x : this.y;
    return m > this.z ? this.z : m;}

Vec3.prototype.mid = function()
{
    return this.sum() - this.min() - this.max();
}

Vec3.prototype.cross = function( v )
{
    var x = this.x, y = this.y, z = this.z;
    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;
    
    return this;
}

Vec3.prototype.length = function()
{
    return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
}
/*
Vec3.prototype.min() = function()
{
    var min = this.x;
    if(this.y < min){
        min = this.y;
    }
    if(this.z < min){
        min = this.z;
    }

    return min;
}

Vec3.prototype.max() = function()
{
    var max = this.x;
    if(this.y > max){
        max = this.y;
    }
    if(this.z > max){
        max = this.z;
    }

    return max;
}

Vec3.prototype.mid() = function()
{
    if(this.x > this.y){
        if(this.z > this.x)return this.x;
        else if(this.y > this.z)return this.y;
        else return this.z;
    }else if(this.y > this.x){
        if(this.z > this.y)return this.y;
        else if(this.x > this.z)return this.x;
        else return this.z;
    }
}

*/
