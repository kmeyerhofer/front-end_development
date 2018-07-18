(false && undefined);                             // false
(false || undefined);                             // false - wrong, undefined
((false && undefined) || (false || undefined));   // false - wrong, undefined
((false || undefined) || (false && undefined));   // false
((false && undefined) && (false || undefined));   // false
((false || undefined) && (false && undefined));   // false - wrong, undefined
('a' || (false && undefined) || '');              // true - wrong, 'a'
((false && undefined) || 'a' || '');              // true - wrong, 'a'
('a' && (false || undefined) && '');              // false - wrong, undefined
((false || undefined) && 'a' && '');              // false - wrong, undefined
