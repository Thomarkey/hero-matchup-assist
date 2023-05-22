export interface Hero {
  //properties
  id: number;
  name: string;
  displayName: string;
  shortName: string;
  abilities: {
    slot: number;
    abilityId: number;
  }[];
  roles: {
    roleId: number;
    level: number;
  }[];
  talents: {
    slot: number;
    gameVersionId: number;
    abilityId: number;
  }[];
  stat: {
    [key: string]: number | boolean | string;
    gameVersionId: number;
    enabled: boolean;
    heroUnlockOrder: number;
    team: boolean;
    cmEnabled: boolean;
    newPlayerEnabled: boolean;
    attackType: string;
    startingArmor: number;
    startingMagicArmor: number;
    startingDamageMin: number;
    startingDamageMax: number;
    attackRate: number;
    attackAnimationPoint: number;
    attackAcquisitionRange: number;
    attackRange: number;
    primaryAttribute: string;
    primaryAttributeEnum: number;
    strengthBase: number;
    strengthGain: number;
    intelligenceBase: number;
    intelligenceGain: number;
    agilityBase: number;
    agilityGain: number;
    hpRegen: number;
    mpRegen: number;
    moveSpeed: number;
    moveTurnRate: number;
    hpBarOffset: number;
    visionDaytimeRange: number;
    visionNighttimeRange: number;
    complexity: number;
  };
  language: {
    heroId: number;
    gameVersionId: number;
    languageId: number;
    displayName: string;
    bio: string;
    hype: string;
  };
  aliases: string[];
}