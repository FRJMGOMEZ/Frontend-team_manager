import { Pipe } from '@angular/core';
export class LpParseDatePipe {
    transform(time, to) {
        let converted;
        if (time === null) {
            return null;
        }
        switch (to) {
            case 'miliseconds':
                converted = time.getTime();
                break;
            case 'date':
                converted = new Date(time);
                break;
        }
        return converted;
    }
}
LpParseDatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'lpParseDate'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtcGFyc2UtZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzLzM0Njk1L0Rlc2t0b3AvRFJBRlQvdGVhbS1tYW5hZ2VyLWZyb250ZW5kL3Byb2plY3RzL2xwLWRhdGUtcGlwZXMvc3JjLyIsInNvdXJjZXMiOlsibGliL2xwLXBhcnNlLWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUlwRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBbUIsRUFBRSxFQUFVO1FBQ3ZDLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssYUFBYTtnQkFBRSxTQUFTLEdBQUksSUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2RCxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUFFLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBRSxJQUFlLENBQUMsQ0FBQTtnQkFDakQsTUFBTTtTQUNUO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xwUGFyc2VEYXRlJ30pXG5leHBvcnQgY2xhc3MgTHBQYXJzZURhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBEYXRlIHwgbnVtYmVyLCB0bzogc3RyaW5nKTogdW5rbm93biB7XG4gICAgbGV0IGNvbnZlcnRlZDtcbiAgICBpZiAodGltZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgc3dpdGNoICh0bykge1xuICAgICAgY2FzZSAnbWlsaXNlY29uZHMnOiBjb252ZXJ0ZWQgPSAodGltZSBhcyBEYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6IGNvbnZlcnRlZCA9IG5ldyBEYXRlKCh0aW1lIGFzIG51bWJlcikpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkO1xuICB9XG5cbn1cbiJdfQ==